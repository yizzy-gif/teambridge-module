// Inline AI chat experience rendered inside the secondary nav when the
// AI Home view toggle is set to "AI Panel". Mirrors the AIComposer +
// AIThread pattern from Automation_2.0's BuilderPage left panel,
// adapted to the narrower secondary-nav surface.

import { Fragment, useState } from 'react';
import styled from 'styled-components';
import {
  AIComposer,
  AIComposerInput,
  AIThread,
  AIAssistantMessage,
  AIUserMessage,
  AILoader,
  AIActivityTrail,
  AIActivityStep,
  AIMessageActions,
  ComposerActions,
  ComposerAttachment,
  ComposerVoiceButton,
  ComposerSendButton,
  Button,
  Copy01Icon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  RefreshCw04Icon,
} from 'alloy-design-system';

interface ChatEntry {
  id: string;
  kind: 'assistant' | 'user';
  content: string;
  timestamp: number;
  /**
   * Marks the seeded greeting that opens the thread. Seeded entries skip
   * the activity trail + action group so the welcome reads as a clean
   * intro rather than a "response" to a request.
   */
  seeded?: boolean;
}

const SEED_THREAD: ChatEntry[] = [
  {
    id: 'seed-greeting',
    kind: 'assistant',
    content: 'Hi — how can I help with your workspace today?',
    timestamp: Date.now(),
    seeded: true,
  },
];

// Wrapper takes the slot NavMiddle would normally occupy: flex 1 column
// with min-height: 0 so AIComposer's internal scroller can size correctly.
const PanelWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;

  [class*='_shell_'] {
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  [class*='_card_'] {
    border-radius: 12px;
  }

  [class*='_wrapper_'] {
    padding: 12px;
  }

  [class*='_scroller_'] {
    padding: 12px;
  }
`;

export function AIHomePanel() {
  const [entries, setEntries] = useState<ChatEntry[]>(SEED_THREAD);
  const [draft, setDraft] = useState('');
  const [isResponding, setIsResponding] = useState(false);

  const send = () => {
    const trimmed = draft.trim();
    if (!trimmed || isResponding) return;
    const userEntry: ChatEntry = {
      id: `u-${Date.now()}`,
      kind: 'user',
      content: trimmed,
      timestamp: Date.now(),
    };
    setEntries(prev => [...prev, userEntry]);
    setDraft('');
    setIsResponding(true);

    // Mock async assistant reply.
    window.setTimeout(() => {
      const reply: ChatEntry = {
        id: `a-${Date.now()}`,
        kind: 'assistant',
        content:
          "Got it — I'll look into that. (Mock reply: this panel is wired to local state only.)",
        timestamp: Date.now(),
      };
      setEntries(prev => [...prev, reply]);
      setIsResponding(false);
    }, 1100);
  };

  const sendState =
    isResponding ? 'streaming' : draft.trim().length === 0 ? 'hidden' : 'ready';

  return (
    <PanelWrap>
      <AIComposer>
        <AIThread density="comfortable" padding="sm">
          {entries.map(entry => {
            if (entry.kind === 'user') {
              return (
                <AIUserMessage key={entry.id} label="You" time={entry.timestamp}>
                  {entry.content}
                </AIUserMessage>
              );
            }

            // Assistant — seeded greeting renders bare; mock replies show
            // the activity trail + message action group, mirroring the
            // Automation_2.0 BuilderPage pattern.
            if (entry.seeded) {
              return (
                <AIAssistantMessage key={entry.id} time={entry.timestamp}>
                  {entry.content}
                </AIAssistantMessage>
              );
            }

            return (
              <Fragment key={entry.id}>
                <AIAssistantMessage>
                  <AIActivityTrail state="done" duration="2s">
                    <AIActivityStep type="thinking" status="done">
                      Reading workspace context
                    </AIActivityStep>
                    <AIActivityStep type="search" status="done" detail="3 results">
                      Searching workforce records
                    </AIActivityStep>
                    <AIActivityStep type="content" status="done">
                      Composing reply
                    </AIActivityStep>
                  </AIActivityTrail>
                  {entry.content}
                </AIAssistantMessage>
                <AIMessageActions
                  visibility="always"
                  align="start"
                  time={entry.timestamp}
                >
                  <Button variant="ghost" size="xs" iconOnly aria-label="Copy">
                    <Copy01Icon size={14} />
                  </Button>
                  <Button variant="ghost" size="xs" iconOnly aria-label="Good response">
                    <ThumbsUpIcon size={14} />
                  </Button>
                  <Button variant="ghost" size="xs" iconOnly aria-label="Bad response">
                    <ThumbsDownIcon size={14} />
                  </Button>
                  <Button variant="ghost" size="xs" iconOnly aria-label="Regenerate">
                    <RefreshCw04Icon size={14} />
                  </Button>
                </AIMessageActions>
              </Fragment>
            );
          })}
          <AIAssistantMessage>
            <AILoader
              variant="gradient-fill"
              size="xs"
              state={isResponding ? 'loading' : 'ready'}
            />
          </AIAssistantMessage>
        </AIThread>

        <AIComposerInput
          value={draft}
          onChange={setDraft}
          onSubmit={send}
          placeholder="Ask AI anything…"
          aria-label="Ask AI"
        >
          <ComposerActions size="sm">
            <ComposerAttachment state="idle" aria-label="Attach" />
            <ComposerVoiceButton state="idle" aria-label="Voice input" />
            <ComposerSendButton
              state={sendState}
              onSend={send}
              aria-label="Send to AI"
            />
          </ComposerActions>
        </AIComposerInput>
      </AIComposer>
    </PanelWrap>
  );
}
