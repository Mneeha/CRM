import { useState } from "react";
import useDataStore from "../zustand/useDataStore";

const Client = () => {
  const {clients}=useDataStore();
  const [search,setSearch]=useState("");
  const [tagFilter,setTagFilter]=useState("all");
  const [expandedClientIds,setExpandedClientIds]=useState([]);
  const tags=["all","vip","active","inactive","trial"];

  const toggleDetails = (clientId) => {
    setExpandedClientIds((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };
  const filteredClients=clients.filter((client) => {
    const matchesSearch=
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase());
    const matchesTag=
      tagFilter==="all" || client.tags.includes(tagFilter);
    return matchesSearch && matchesTag;
  });
  return (
    <div className="c_page">
    <div className="bg">
    <img src="/img9.png" alt="bg" className="bgimg" />
    </div>
      <h1 className="c_heading">Client List</h1>
      <div className="c_controls">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input" />
        <select
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="tag-filter" >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="c_list">
        {filteredClients.map((client) => (
          <div key={client.id} className="c_card">
            <h2
              className="c_name"
              onClick={() => toggleDetails(client.id)}
              style={{ cursor: "pointer", color:"#301818ff" }}>
              {client.name}
            </h2>
            {expandedClientIds.includes(client.id) && ( 
            <>
             <p>Email: {client.email}</p>
             <p>Phone: {client.phone}</p>
             <p>Company: {client.company}</p>
             <div className="c_tags">
                 {client.tags.map((tag) => (
                   <span key={tag} className="tag">{tag}</span>
            ))}
            </div></>
            )}</div>
            ))}
           </div> </div>
           
  );};
export default Client;
