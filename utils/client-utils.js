"use client";

// This file contains client-side utility functions that use browser APIs like document

export const createTag = (tag) => {
  if (typeof document !== 'undefined') {
    return document.createElement(tag);
  }
  return null;
};

export const isClient = typeof window !== 'undefined';