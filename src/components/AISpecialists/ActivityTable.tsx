// Activity log table for a single AI Specialist persona.
// Filters mockActivities by personaId and optional category list.
// Uses Alloy Table primitives for consistent styling.

import React from 'react';
import styled from 'styled-components';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  CellText,
} from 'alloy-design-system';
import { mockActivities } from '../../data/mockActivities';
import type { ActivityCategory } from '../../data/mockActivities';

interface ActivityTableProps {
  personaId: string;
  categories?: ActivityCategory[];
}

const TableWrapper = styled.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  overflow: hidden;
`;

const EmptyRow = styled.tr`
  background: var(--color-bg-primary, #fff);
`;

const EmptyCell = styled.td`
  text-align: center;
  color: var(--color-content-tertiary, #87919f);
  padding: 32px 16px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
`;

export function ActivityTable({ personaId, categories }: ActivityTableProps) {
  const rows = mockActivities.filter(a =>
    a.personaId === personaId &&
    (categories == null || categories.length === 0 || categories.includes(a.category)),
  );

  return (
    <TableWrapper>
      <Table size="sm">
        <TableHeader>
          <TableRow hoverable={false}>
            <TableHead>Time</TableHead>
            <TableHead>Span</TableHead>
            <TableHead>Type of Action</TableHead>
            <TableHead>Trigger Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <EmptyRow>
              <EmptyCell colSpan={4}>No activity yet.</EmptyCell>
            </EmptyRow>
          ) : (
            rows.map(row => (
              <TableRow key={row.id}>
                <TableCell><CellText variant="secondary">{row.time}</CellText></TableCell>
                <TableCell><CellText variant="mono">{row.span}</CellText></TableCell>
                <TableCell><CellText>{row.typeOfAction}</CellText></TableCell>
                <TableCell><CellText variant="secondary">{row.triggerType}</CellText></TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
