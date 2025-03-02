import React from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ tickets, dispatch, editingTicket }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          dispatch={dispatch}
          editingTicket={editingTicket}
        />
      ))}
    </div>
  );
}
