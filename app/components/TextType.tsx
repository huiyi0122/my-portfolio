"use client";

import React, { useState, useEffect, useRef, ElementType } from "react";

type TextTypeOwnProps<C extends ElementType = ElementType> = {
  as?: C;
  text: string;
  typingSpeed?: number;
  loop?: boolean;
  cursorCharacter?: string;
  onTypingComplete?: () => void;
};

type TextTypeProps<C extends ElementType = ElementType> = TextTypeOwnProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextTypeOwnProps<C>>;

function TextType<C extends ElementType = "span">({
  as,
  text,
  typingSpeed = 100,
  loop = false,
  cursorCharacter = "|",
  onTypingComplete,
  ...props
}: TextTypeProps<C>) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const onCompleteCalled = useRef(false);

  useEffect(() => {
    // 每 500ms 切换光标的可见性，实现闪烁效果
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      setDisplayedText((currentText) => {
        if (isDeleting) {
          // Deleting logic
          if (currentText.length > 0) {
            return currentText.slice(0, -1);
          }
          // Finished deleting
          if (loop) {
            setIsDeleting(false);
          }
          return "";
        }

        // Typing logic
        if (currentText.length < text.length) {
          return text.slice(0, currentText.length + 1);
        }

        // Finished typing
        if (loop) {
          // If looping, wait then start deleting
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (onTypingComplete && !onCompleteCalled.current) {
          onTypingComplete();
          onCompleteCalled.current = true;
        }
        return currentText;
      });
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loop, onTypingComplete, text, typingSpeed]);

  const Component = (as || "span") as ElementType;

  return React.createElement(
    Component,
    props as any,
    <>
      {displayedText}
      <span className="inline-block" style={{ minWidth: "0.5ch" }}>
        {showCursor ? cursorCharacter : "\u00A0"}
      </span>
    </>
  );
}

export default TextType;
