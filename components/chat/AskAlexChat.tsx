"use client";

import { useEffect, useRef, useState } from "react";
import { chatConfig, getReply, suggestions, type Suggestion } from "@/data/chat";
import { BotIcon, CloseIcon, SendIcon } from "@/components/ui/Icons";

type Message = { id: number; from: "bot" | "user"; text: string };

let idSeq = 1;

export function AskAlexChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: chatConfig.greeting },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const showSuggestions = messages.length <= 1;

  // Keep the transcript scrolled to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  async function send(text: string, suggestionKey?: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((m) => [...m, { id: idSeq++, from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    const reply = await getReply(trimmed, suggestionKey);
    setTyping(false);
    setMessages((m) => [...m, { id: idSeq++, from: "bot", text: reply }]);
  }

  function pickSuggestion(s: Suggestion) {
    void send(s.label, s.key);
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center bg-lime text-ink-900 shadow-[0_0_30px_rgba(196,248,42,0.45)] transition-transform hover:scale-105"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <BotIcon className="h-7 w-7" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-flush" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[480px] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col border border-ink-line bg-ink-800 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink-line p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-lime text-ink-900">
                <BotIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-chalk">
                  {chatConfig.name}
                </p>
                <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-label text-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {chatConfig.status}
                </p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-ash hover:text-chalk">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Transcript */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] px-3.5 py-2.5 font-mono text-[13px] leading-relaxed ${
                  m.from === "bot"
                    ? "bg-ink-card text-ash"
                    : "ml-auto bg-lime text-ink-900"
                }`}
              >
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="flex w-14 items-center gap-1 bg-ink-card px-3.5 py-3">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 animate-blink rounded-full bg-ash"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            )}

            {showSuggestions && !typing && (
              <div className="space-y-2 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => pickSuggestion(s)}
                    className="block w-full border border-ink-line px-3 py-2 text-left font-mono text-[11px] uppercase tracking-wide text-ash transition-colors hover:border-lime hover:text-lime"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
            className="flex items-center gap-2 border-t border-ink-line p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Ajoy's work..."
              className="flex-1 bg-transparent px-2 font-mono text-[13px] text-chalk outline-none placeholder:text-smoke"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={!input.trim() || typing}
              className="grid h-9 w-9 place-items-center text-ash transition-colors hover:text-lime disabled:opacity-40"
            >
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
