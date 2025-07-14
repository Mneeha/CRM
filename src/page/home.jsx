import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const cards = [
    { title:'Clients',desc:'Manage your client contacts.',path:'/clients'},
    { title:'Leads',desc:'Track your leads progress.',path:'/leads'},
    { title:'Tasks',desc:'Reminders and notes per client.',path:'/tasks-notes'}, ];
  return (
    <div className="home_container">
      <img src="/img6.png" alt="bg" className="bgimg" />
      <div className="h_content">
        <h1 className="h_title">Client Relationship Manager </h1>
        <div className="card-wrapper">
         {cards.map((card) => (
          <div
            key={card.title}
              onClick={() => navigate(card.path)}
              className="card" >
              <h2 className="card-title">{card.title}</h2>
              <p className="card-desc">{card.desc}</p> </div> ))}
       </div></div>
    </div>
  );
};
export default Home;
