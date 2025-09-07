// src/App.js
// Shadow Reapers - Enhanced self-contained single-file React app
// Data persisted in localStorage with improved UI/UX and functionality

import React, { useEffect, useState, useRef, useCallback } from "react";

/* ============================
   Inline CSS injection
   ============================ */
const injectStyles = () => {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
    :root{
      --bg:#050507;
      --panel:#0b0b0d;
      --neon:#00fff7;
      --neon-dim:#0fe8df;
      --accent:#aefcff;
      --muted:#9fe3e0;
      --danger:#ff6b6b;
      --success:#6bff8d;
      --glass: rgba(255,255,255,0.02);
      --transition: all 0.3s ease;
    }
    *{box-sizing:border-box}
    html,body,#root{height:100%;margin:0;font-family: 'Orbitron', sans-serif;background: linear-gradient(180deg,#050507 0%, #070317 100%);color:#e9feff;}
    a{color:var(--neon)}
    .app-shell{min-height:100vh; padding-bottom:70px;}
    .container{max-width:1140px;margin:0 auto;padding:28px;}
    .center{display:flex;align-items:center;justify-content:center}
    .landing-wrap{height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
    .logo-blob{position:absolute;inset:0;background:radial-gradient(circle at 50% 40%, rgba(0,255,247,0.06), transparent 20%);}
    .neon-logo{font-size:4.2rem;color:var(--neon);text-shadow:0 0 8px rgba(0,255,247,0.18),0 0 30px rgba(0,255,247,0.08);transform-origin:center;letter-spacing:6px}
    .tagline{color:var(--muted);margin-top:8px;font-size:1rem}
    .fadeup{animation:fadeUp 1s forwards}
    @keyframes fadeUp{
      0%{transform:translateY(40px) scale(0.6);opacity:0}
      70%{transform:translateY(-10px) scale(1.08);opacity:1}
      100%{transform:translateY(-120px) scale(1);opacity:1}
    }

    /* Neon buttons */
    .btn{background:var(--neon);color:#061014;border:none;padding:10px 14px;border-radius:10px;cursor:pointer;font-weight:700;box-shadow:0 6px 20px rgba(0,255,247,0.06);transition:var(--transition)}
    .btn:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(0,255,247,0.12)}
    .btn-ghost{background:transparent;border:1px solid rgba(0,255,247,0.12);color:var(--neon);padding:8px 12px;border-radius:8px;transition:var(--transition)}
    .btn-ghost:hover{background:rgba(0,255,247,0.08);transform:translateY(-2px)}
    .btn-success{background:var(--success);color:#061014}
    .btn-danger{background:var(--danger);color:#fff}

    /* Sections */
    .section{padding:28px 0}
    h1{color:var(--neon);margin:0 0 8px 0;font-size:2rem}
    h2{color:var(--neon);margin:0;font-size:1.25rem}
    h3{color:var(--muted);margin:0;font-size:1.1rem}
    p.lead{color:var(--muted);margin:8px 0 18px 0}

    /* tournament box */
    .tournament-box{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid rgba(0,255,247,0.06);padding:14px;border-radius:12px;margin:12px 0;display:flex;justify-content:space-between;align-items:center;transition:var(--transition)}
    .tournament-box:hover{transform:translateY(-3px);box-shadow:0 10px 25px rgba(0,255,247,0.08);border-color:rgba(0,255,247,0.12)}
    .tournament-left{flex:1}
    .tournament-meta{color:var(--muted);font-size:0.95rem}
    .tournament-desc{color:#bff9f6;margin-top:8px}

    /* layout */
    .flex{display:flex;gap:18px;align-items:flex-start}
    .col{flex:1}
    .card{background:var(--panel);border-radius:12px;padding:14px;border:1px solid rgba(255,255,255,0.02);transition:var(--transition)}
    .card:hover{box-shadow:0 8px 20px rgba(0,255,247,0.05)}
    .filters{margin:12px 0}

    /* chat & leaderboard */
    .chat-window{height:340px;overflow-y:auto;padding:12px;border-radius:10px;background:linear-gradient(180deg,#070707, #0b0b0b);border:1px solid rgba(0,255,247,0.04);scrollbar-width:thin;scrollbar-color: var(--neon) transparent}
    .chat-window::-webkit-scrollbar{width:6px}
    .chat-window::-webkit-scrollbar-thumb{background-color:var(--neon);border-radius:3px}
    .chat-msg{background:linear-gradient(90deg,var(--neon), var(--neon-dim));color:#031416;padding:8px;border-radius:8px;margin:8px 0;font-weight:700;transition:var(--transition)}
    .chat-msg.alt{background:linear-gradient(90deg,#9ff  , #70eaf0);color:#031416}
    .leaderboard{list-style:none;padding:8px;margin:0}
    .leaderboard li{padding:8px;border-bottom:1px dashed rgba(255,255,255,0.02);display:flex;justify-content:space-between;font-weight:700;color:var(--muted);transition:var(--transition)}
    .leaderboard li:hover{background:rgba(0,255,247,0.05)}

    /* form */
    .form-row{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
    input[type="text"], input[type="number"], input[type="date"], input[type="password"], select, textarea{background:#061018;border:1px solid rgba(0,255,247,0.06);padding:10px;border-radius:8px;color:var(--neon);min-width:160px;transition:var(--transition);font-family:inherit}
    input:focus, select:focus, textarea:focus{outline:none;border-color:var(--neon);box-shadow:0 0 10px rgba(0,255,247,0.1)}
    textarea{min-width:300px;resize:vertical}

    /* admin */
    .admin-bar{position:fixed;right:12px;top:12px;z-index:999}
    .admin-note{color:var(--muted);font-size:0.9rem;margin-top:8px}

    /* modals */
    .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px}
    .modal-content{background:#071014;border-radius:12px;padding:24px;border:1px solid rgba(0,255,247,0.06);max-width:500px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 10px 40px rgba(0,0,0,0.3)}
    .modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
    .modal-close{background:none;border:none;color:var(--muted);font-size:1.5rem;cursor:pointer;transition:var(--transition)}
    .modal-close:hover{color:var(--neon)}

    /* badges */
    .badge{display:inline-block;padding:4px 8px;border-radius:4px;font-size:0.8rem;font-weight:700}
    .badge-success{background:var(--success);color:#061014}
    .badge-warning{background:#ffc107;color:#061014}
    .badge-info{background:var(--neon);color:#061014}

    /* notifications */
    .notification{position:fixed;bottom:20px;right:20px;padding:12px 16px;border-radius:8px;background:var(--panel);border-left:4px solid var(--neon);box-shadow:0 4px 12px rgba(0,0,0,0.2);z-index:1000;animation:slideIn 0.3s ease}
    .notification.success{border-left-color:var(--success)}
    .notification.error{border-left-color:var(--danger)}
    @keyframes slideIn{from{transform:translateX(100px);opacity:0} to{transform:translateX(0);opacity:1}}

    /* responsive */
    @media (max-width:900px){
      .flex{flex-direction:column}
      .neon-logo{font-size:3rem}
      .tournament-box{flex-direction:column;align-items:flex-start;gap:12px}
    }

    .small{font-size:0.9rem;color:var(--muted)}
    .muted{color:var(--muted)}
    .text-center{text-align:center}
    .mt-1{margin-top:8px}
    .mt-2{margin-top:16px}
    .mb-1{margin-bottom:8px}
    .mb-2{margin-bottom:16px}
  `;
  const style = document.createElement("style");
  style.id = "shadow-reapers-styles";
  style.innerHTML = css;
  if (!document.getElementById("shadow-reapers-styles")) document.head.appendChild(style);
};
injectStyles();

/* =============================
   LocalStorage helpers
   ============================= */
const LS_KEYS = {
  TOURNAMENTS: "sr_tournaments_v2",
  PARTICIPANTS: "sr_participants_v2",
  CHAT: "sr_chat_v2",
  LEADERBOARD: "sr_lb_v2",
  ADMIN_PASS: "sr_admin_pass_v2",
  USER_PROFILE: "sr_user_profile_v2",
};

const saveToLS = (key, obj) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (e) {
    console.error("LS write error", e);
  }
};

const readFromLS = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) {
    console.error("LS read error", e);
    return fallback;
  }
};

/* =============================
   Utility functions
   ============================= */
const genId = () => "id_" + Math.random().toString(36).slice(2, 10);
const formatDate = (dStr) => {
  if (!dStr) return "-";
  try {
    const d = new Date(dStr);
    if (Number.isNaN(d.getTime())) return dStr;
    return d.toLocaleDateString();
  } catch { return dStr; }
};

const formatCurrency = (amount) => {
  return `₹${amount}`;
};

/* =============================
   Admin password helpers (local)
   ============================= */
const simpleHash = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return String(Math.abs(h));
};

const setAdminPass = (plain) => {
  const hashed = simpleHash(plain || "shadow-admin");
  localStorage.setItem(LS_KEYS.ADMIN_PASS, hashed);
};

const verifyAdminPass = (plain) => {
  const stored = localStorage.getItem(LS_KEYS.ADMIN_PASS);
  if (!stored) {
    setAdminPass("shadow-admin");
    return true;
  }
  return stored === simpleHash(plain);
};

/* =============================
   Notification System
   ============================= */
const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = "info", duration = 3000) => {
    const id = genId();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
    
    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map(notification => (
          <div key={notification.id} className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

/* =============================
   Sample data initialization
   ============================= */
const ensureSampleData = () => {
  let tours = readFromLS(LS_KEYS.TOURNAMENTS, null);
  if (!tours) {
    const id1 = "t_" + Date.now().toString(36);
    const id2 = id1 + "_b";
    const sample = {};
    sample[id1] = {
      id: id1,
      name: "FreeFire Summer Cup",
      game: "FreeFire",
      date: "2025-09-15",
      fee: 50,
      description: "Hot summer cup—fast matches, big rewards.",
      createdAt: Date.now(),
      status: "upcoming"
    };
    sample[id2] = {
      id: id2,
      name: "Valorant Masters",
      game: "Valorant",
      date: "2025-09-25",
      fee: 120,
      description: "Tactical 5v5 - international format practice.",
      createdAt: Date.now(),
      status: "upcoming"
    };
    saveToLS(LS_KEYS.TOURNAMENTS, sample);
    saveToLS(LS_KEYS.PARTICIPANTS, {});
    saveToLS(LS_KEYS.CHAT, {});
    saveToLS(LS_KEYS.LEADERBOARD, {});
    
    // Initialize user profile if not exists
    if (!localStorage.getItem(LS_KEYS.USER_PROFILE)) {
      saveToLS(LS_KEYS.USER_PROFILE, {
        name: "",
        gameID: "",
        avatar: "",
        preferences: {}
      });
    }
  }
};
ensureSampleData();

/* =============================
   Main App
   ============================= */
function App() {
  const [view, setView] = useState("landing");
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(() => readFromLS(LS_KEYS.USER_PROFILE, {}));

  const [tournaments, setTournaments] = useState(() => readFromLS(LS_KEYS.TOURNAMENTS, {}));
  const [participantsMap, setParticipantsMap] = useState(() => readFromLS(LS_KEYS.PARTICIPANTS, {}));
  const [chats, setChats] = useState(() => readFromLS(LS_KEYS.CHAT, {}));
  const [leaderboardMap, setLeaderboardMap] = useState(() => readFromLS(LS_KEYS.LEADERBOARD, {}));

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPromptOpen, setAdminPromptOpen] = useState(false);
  const [landingDone, setLandingDone] = useState(false);

  const { addNotification } = useNotification();

  // Persist data on change
  useEffect(() => saveToLS(LS_KEYS.TOURNAMENTS, tournaments), [tournaments]);
  useEffect(() => saveToLS(LS_KEYS.PARTICIPANTS, participantsMap), [participantsMap]);
  useEffect(() => saveToLS(LS_KEYS.CHAT, chats), [chats]);
  useEffect(() => saveToLS(LS_KEYS.LEADERBOARD, leaderboardMap), [leaderboardMap]);
  useEffect(() => saveToLS(LS_KEYS.USER_PROFILE, userProfile), [userProfile]);

  // Landing animation
  useEffect(() => {
    const t1 = setTimeout(() => {
      setLandingDone(true);
    }, 1600);
    return () => clearTimeout(t1);
  }, []);

  const tournamentsArray = Object.values(tournaments || {})
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  /* --------------
     CRUD: tournaments
     -------------- */
  const addTournament = (t) => {
    const id = t.id || genId();
    const newT = { 
      ...t, 
      id, 
      createdAt: Date.now(),
      status: "upcoming"
    };
    setTournaments((prev) => ({ ...prev, [id]: newT }));
    
    // Initialize related data
    setParticipantsMap((p) => ({ ...p, [id]: p[id] || {} }));
    setChats((c) => ({ ...c, [id]: c[id] || [] }));
    setLeaderboardMap((lb) => ({ ...lb, [id]: lb[id] || {} }));
    
    addNotification(`Tournament "${t.name}" created successfully`, "success");
    return id;
  };

  const updateTournament = (id, patch) => {
    setTournaments((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], ...patch } };
    });
    addNotification("Tournament updated successfully", "success");
  };

  const deleteTournament = (id) => {
    const name = tournaments[id]?.name || "Tournament";
    const copy = { ...tournaments };
    delete copy[id];
    setTournaments(copy);
    
    const copyP = { ...participantsMap }; 
    delete copyP[id]; 
    setParticipantsMap(copyP);
    
    const copyC = { ...chats }; 
    delete copyC[id]; 
    setChats(copyC);
    
    const copyL = { ...leaderboardMap }; 
    delete copyL[id]; 
    setLeaderboardMap(copyL);
    
    addNotification(`"${name}" deleted successfully`, "success");
  };

  /* --------------
     Participants
     -------------- */
  const registerParticipant = (tournamentId, participant) => {
    const pid = participant.gameID && participant.gameID.trim() ? participant.gameID.trim() : genId();
    setParticipantsMap((prev) => {
      const prevForT = prev[tournamentId] || {};
      return { 
        ...prev, 
        [tournamentId]: { 
          ...prevForT, 
          [pid]: { 
            ...participant, 
            joinedAt: Date.now(), 
            id: pid 
          } 
        } 
      };
    });
    
    // Update user profile with the provided info
    setUserProfile(prev => ({
      ...prev,
      name: participant.name || prev.name,
      gameID: participant.gameID || prev.gameID
    }));
    
    addNotification(`Successfully registered for ${tournaments[tournamentId]?.name}`, "success");
    return pid;
  };

  /* --------------
     Chat functions
     -------------- */
  const pushChat = (tournamentId, entry) => {
    setChats((prev) => {
      const prevList = prev[tournamentId] ? [...prev[tournamentId]] : [];
      const newList = [...prevList, { ...entry, ts: Date.now() }];
      if (newList.length > 1000) newList.splice(0, newList.length - 1000);
      return { ...prev, [tournamentId]: newList };
    });
  };

  /* --------------
     Leaderboard updates
     -------------- */
  const updateLeaderboard = (tournamentId, gameID, payload) => {
    setLeaderboardMap((prev) => {
      const prevForT = prev[tournamentId] ? { ...prev[tournamentId] } : {};
      prevForT[gameID] = { ...(prevForT[gameID] || {}), ...payload };
      return { ...prev, [tournamentId]: prevForT };
    });
  };

  /* --------------
     Admin login
     -------------- */
  const openAdminPrompt = () => setAdminPromptOpen(true);

  const handleAdminLogin = (pass) => {
    if (verifyAdminPass(pass)) {
      setIsAdmin(true);
      setAdminPromptOpen(false);
      addNotification("Admin access granted", "success");
    } else {
      addNotification("Incorrect admin password", "error");
    }
  };

  /* --------------
     Navigation
     -------------- */
  const enterRoom = (t) => {
    setSelectedTournament(t);
    setView("room");
  };
  
  const exitRoom = () => {
    setSelectedTournament(null);
    setView("home");
  };
  
  const openJoinModal = (t) => {
    setSelectedTournament(t);
    setJoinModalOpen(true);
  };

  /* --------------
     Initial data
     -------------- */
  useEffect(() => {
    if (!tournaments || Object.keys(tournaments).length === 0) {
      const idA = addTournament({
        name: "Shadow Reapers Cup",
        game: "PUBG",
        date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString().slice(0, 10),
        fee: 80,
        description: "Open qualifiers for the Shadow Reapers Cup. Win & move to the regional finals!",
      });
      const idB = addTournament({
        name: "Valorant Masters Practice",
        game: "Valorant",
        date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString().slice(0, 10),
        fee: 120,
        description: "Team-based 5v5 practice in competitive format.",
      });
      
      pushChat(idA, { 
        user: "Admin", 
        message: "Welcome to Shadow Reapers Cup! Check rules in the tournament description." 
      });
    }
    
    if (!localStorage.getItem(LS_KEYS.ADMIN_PASS)) setAdminPass("shadow-admin");
    // eslint-disable-next-line
  }, []);

  /* =========================
     RENDER
     ========================= */
  return (
    <NotificationProvider>
      <div className="app-shell">
        {/* Admin toggle */}
        <div className="admin-bar">
          <button
            className="btn"
            onClick={() => {
              if (!isAdmin) openAdminPrompt();
              else setIsAdmin(false);
            }}
          >
            {isAdmin ? "Exit Admin" : "Admin Login"}
          </button>
        </div>

        {/* Landing */}
        {view === "landing" && !landingDone && (
          <div className="landing-wrap">
            <div className="logo-blob" />
            <div style={{ textAlign: "center" }}>
              <div className="neon-logo fadeup">Shadow Reapers</div>
              <div className="tagline muted">Gear up. Compete. Conquer global arenas.</div>
            </div>
          </div>
        )}

        {/* Home view */}
        {(landingDone || view !== "landing") && view === "home" && !isAdmin && (
          <div>
            <div className="container">
              <h1>Shadow Reapers</h1>
              <p className="lead">Join tournaments, sharpen your skills, and be ready for international play. We provide practice tournaments, leaderboards, and community rooms to help you level up.</p>

              <HomeMain
                tournaments={tournamentsArray}
                onJoin={openJoinModal}
                onEnterRoom={enterRoom}
                onOpenAdmin={() => setAdminPromptOpen(true)}
                userProfile={userProfile}
              />
            </div>
          </div>
        )}

        {/* Tournament Room */}
        {view === "room" && selectedTournament && (
          <TournamentRoom
            tournament={selectedTournament}
            participants={participantsMap[selectedTournament.id] || {}}
            chat={chats[selectedTournament.id] || []}
            leaderboard={leaderboardMap[selectedTournament.id] || {}}
            onSendChat={(entry) => pushChat(selectedTournament.id, entry)}
            onUpdateLeaderboard={(gameID, payload) => updateLeaderboard(selectedTournament.id, gameID, payload)}
            onLeave={() => exitRoom()}
            userProfile={userProfile}
          />
        )}

        {/* Admin Panel */}
        {isAdmin && view !== "room" && (
          <AdminPanel
            tournaments={tournamentsArray}
            onAdd={addTournament}
            onUpdate={updateTournament}
            onDelete={deleteTournament}
            onClose={() => setIsAdmin(false)}
            setAdminPass={setAdminPass}
          />
        )}

        {/* Footer */}
        {!isAdmin && view !== "room" && (
          <div className="container">
            <div style={{ marginTop: 18, paddingTop: 12, borderTop: "1px dashed rgba(255,255,255,0.02)" }}>
              <small className="muted">Shadow Reapers — Demo client-only build. For production, add server-side logic and secure payments.</small>
            </div>
          </div>
        )}

        {/* Admin login modal */}
        {adminPromptOpen && (
          <AdminLoginModal
            onClose={() => setAdminPromptOpen(false)}
            onLogin={handleAdminLogin}
          />
        )}

        {/* Join modal */}
        {joinModalOpen && selectedTournament && (
          <JoinModal
            tournament={selectedTournament}
            onClose={() => {
              setJoinModalOpen(false);
              setSelectedTournament(null);
            }}
            onConfirmRegister={(participantInfo) => {
              const pid = registerParticipant(selectedTournament.id, participantInfo);
              setJoinModalOpen(false);
              enterRoom(selectedTournament);
            }}
            userProfile={userProfile}
          />
        )}

        {/* Auto navigate to home after landing */}
        {landingDone && view === "landing" && setView("home")}
      </div>
    </NotificationProvider>
  );
}

/* -------------------------
   HomeMain Component
   ------------------------- */
function HomeMain({ tournaments, onJoin, onEnterRoom, onOpenAdmin, userProfile }) {
  const [selectedGame, setSelectedGame] = useState("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const games = ["All", "FreeFire", "BGMI", "COD", "PUBG", "Valorant", "COC"];

  const filtered = tournaments
    .filter((t) => (selectedGame === "All" ? true : t.game === selectedGame))
    .filter((t) => (query.trim() === "" ? true : 
      t.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      t.description.toLowerCase().includes(query.trim().toLowerCase())
    ))
    .sort((a, b) => {
      if (sortBy === "date") return new Date(a.date) - new Date(b.date);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "fee") return a.fee - b.fee;
      return 0;
    });

  return (
    <div>
      <div className="section">
        <div className="flex">
          <div className="col card">
            <h2>Why Play on Shadow Reapers?</h2>
            <p className="small">We prepare players for international competition — structured tournaments, ranked leaderboards, team rooms, and friendly community support.</p>
            <ul>
              <li>Practice in tournament format</li>
              <li>Ranked leaderboards and match statistics</li>
              <li>In-game room chat and coordination</li>
              <li>Admin-controlled tournaments and schedules</li>
            </ul>
            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={() => alert("Inspire: Become international-ready. Practice, study replays, improve.")}>Inspire Me</button>
              <button className="btn-ghost" style={{ marginLeft: 8 }} onClick={onOpenAdmin}>Admin Panel</button>
            </div>
            
            {userProfile.name && (
              <div className="mt-2" style={{ paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <h3>Your Profile</h3>
                <p className="small">Name: {userProfile.name}</p>
                {userProfile.gameID && <p className="small">Game ID: {userProfile.gameID}</p>}
              </div>
            )}
          </div>

          <div className="col card">
            <h2>Upcoming / Current Tournaments</h2>
            
            <div className="filters">
              <div>
                {games.map((g) => (
                  <button 
                    key={g} 
                    className="btn-ghost" 
                    onClick={() => setSelectedGame(g)} 
                    style={{ 
                      marginRight: 8, 
                      marginBottom: 8,
                      borderColor: selectedGame === g ? "rgba(0,255,247,0.2)" : undefined 
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
              
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Search tournaments..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)} 
                />
                
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="date">Sort by Date</option>
                  <option value="name">Sort by Name</option>
                  <option value="fee">Sort by Fee</option>
                </select>
              </div>
            </div>

            <div>
              {filtered.length === 0 && (
                <div className="text-center mt-2">
                  <p className="muted">No tournaments match the selected filters.</p>
                  <button className="btn-ghost" onClick={() => {
                    setSelectedGame("All");
                    setQuery("");
                  }}>
                    Clear Filters
                  </button>
                </div>
              )}
              
              {filtered.map((t) => (
                <div key={t.id} className="tournament-box">
                  <div className="tournament-left">
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: 'wrap' }}>
                      <div>
                        <strong style={{ color: "var(--neon)" }}>{t.name}</strong>
                        <div className="tournament-meta">
                          {t.game} • {formatDate(t.date)} • {formatCurrency(t.fee)}
                          {t.status && <span className="badge badge-info ml-1">{t.status}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="tournament-desc">{t.description || "No description provided."}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <button className="btn" onClick={() => onJoin(t)}>Register</button>
                    <button className="btn-ghost" onClick={() => onEnterRoom(t)}>View Room</button>
                    <div style={{ marginTop: 8 }}><small className="muted">Organized by Admin</small></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   TournamentRoom component
   ------------------------- */
function TournamentRoom({ tournament, participants = {}, chat = [], leaderboard = {}, onSendChat, onUpdateLeaderboard, onLeave, userProfile }) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState(userProfile.name || "");
  const [gameID, setGameID] = useState(userProfile.gameID || "");
  const [kills, setKills] = useState(0);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  const send = () => {
    const txt = message.trim();
    if (!txt) return;
    if (!name.trim()) {
      alert("Please enter your name before chatting");
      return;
    }
    
    onSendChat({ user: name, message: txt, ts: Date.now() });
    setMessage("");
  };

  const doUpdateKills = () => {
    if (!gameID) return alert("Please enter your Game ID before updating kills.");
    onUpdateLeaderboard(gameID, { name: name || "Player", gameID, kills: Number(kills || 0) });
    alert("Leaderboard updated locally.");
  };

  const participantsArr = Object.values(participants).sort((a, b) => (b.joinedAt || 0) - (a.joinedAt || 0));
  const lbArr = Object.values(leaderboard).sort((a, b) => (b.kills || 0) - (a.kills || 0));

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: 'wrap' }}>
        <div>
          <h1>{tournament.name}</h1>
          <span className="small" style={{ marginLeft: 2 }}>
            {tournament.game} • {formatDate(tournament.date)} • {formatCurrency(tournament.fee)}
            {tournament.status && <span className="badge badge-info ml-1">{tournament.status}</span>}
          </span>
        </div>
        <div>
          <button className="btn" onClick={onLeave}>Leave Room</button>
        </div>
      </div>

      <div className="section flex">
        <div className="col card">
          <h2>Chat Room</h2>
          <div className="chat-window" ref={chatRef}>
            {chat.length === 0 && <div className="small muted" style={{ padding: 8 }}>No messages yet — say hi!</div>}
            {chat.map((m, idx) => (
              <div key={idx} className={`chat-msg ${idx % 2 === 0 ? "" : "alt"}`}>
                <strong>{m.user}:</strong> <span style={{ marginLeft: 8 }}>{m.message}</span>
                <div style={{ fontSize: 11, color: "rgba(0,255,247,0.22)", marginTop: 6 }}>
                  {new Date(m.ts).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <div className="form-row">
              <input 
                type="text" 
                placeholder="Your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder="Game ID" 
                value={gameID} 
                onChange={(e) => setGameID(e.target.value)} 
              />
            </div>
            <div className="form-row">
              <input 
                type="text" 
                placeholder="Type message..." 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyDown={(e) => e.key === "Enter" && send()} 
              />
              <button className="btn" onClick={send}>Send</button>
            </div>
          </div>
        </div>

        <div style={{ width: 360 }}>
          <div className="card" style={{ marginBottom: 12 }}>
            <h2>Leaderboard</h2>
            <div className="form-row">
              <input 
                type="number" 
                placeholder="Kills" 
                value={kills} 
                onChange={(e) => setKills(e.target.value)} 
                min="0"
              />
              <button className="btn" onClick={doUpdateKills}>Update Kills</button>
            </div>
            <ol className="leaderboard">
              {lbArr.length === 0 && <div className="small muted">No leaderboard entries yet.</div>}
              {lbArr.map((p, i) => (
                <li key={i}>
                  <span>{i + 1}. {p.name} ({p.gameID})</span>
                  <span style={{ color: "var(--neon)" }}>Kills: {p.kills || 0}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="card">
            <h2>Participants ({participantsArr.length})</h2>
            <div style={{ maxHeight: 220, overflowY: "auto" }}>
              {participantsArr.length === 0 && <div className="small muted">No participants joined yet.</div>}
              {participantsArr.map((p) => (
                <div key={p.id} style={{ padding: 8, borderBottom: "1px dashed rgba(255,255,255,0.02)" }}>
                  <strong style={{ color: "var(--neon)" }}>{p.name}</strong>
                  <div className="small muted">{p.gameID} • joined {new Date(p.joinedAt).toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   AdminPanel component
   ------------------------- */
function AdminPanel({ tournaments = [], onAdd, onUpdate, onDelete, onClose, setAdminPass }) {
  const [newT, setNewT] = useState({ 
    name: "", 
    game: "FreeFire", 
    date: "", 
    fee: 0, 
    description: "",
    status: "upcoming"
  });

  const handleAdd = () => {
    if (!newT.name || !newT.date) return alert("Name & date required");
    onAdd(newT);
    setNewT({ 
      name: "", 
      game: "FreeFire", 
      date: "", 
      fee: 0, 
      description: "",
      status: "upcoming"
    });
  };

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Admin Panel</h1>
        <div>
          <button className="btn" onClick={onClose}>Close Admin</button>
        </div>
      </div>

      <div className="section card">
        <h2>Add Tournament</h2>
        <div className="form-row">
          <input 
            type="text" 
            placeholder="Name" 
            value={newT.name} 
            onChange={(e) => setNewT((s) => ({ ...s, name: e.target.value }))} 
          />
          <select 
            value={newT.game} 
            onChange={(e) => setNewT((s) => ({ ...s, game: e.target.value }))}
          >
            <option>FreeFire</option>
            <option>BGMI</option>
            <option>COD</option>
            <option>PUBG</option>
            <option>Valorant</option>
            <option>COC</option>
          </select>
          <input 
            type="date" 
            value={newT.date} 
            onChange={(e) => setNewT((s) => ({ ...s, date: e.target.value }))} 
          />
          <input 
            type="number" 
            placeholder="Fee (₹)" 
            value={newT.fee} 
            onChange={(e) => setNewT((s) => ({ ...s, fee: Number(e.target.value) }))} 
          />
          <select 
            value={newT.status} 
            onChange={(e) => setNewT((s) => ({ ...s, status: e.target.value }))}
          >
            <option value="upcoming">Upcoming</option>
            <option value="live">Live</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div style={{ marginTop: 8 }}>
          <textarea 
            placeholder="Short description" 
            rows="2" 
            value={newT.description} 
            onChange={(e) => setNewT((s) => ({ ...s, description: e.target.value }))} 
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <button className="btn" onClick={handleAdd}>Add Tournament</button>
        </div>
      </div>

      <div className="section">
        <h2>Existing Tournaments ({tournaments.length})</h2>
        {tournaments.length === 0 && <div className="muted small">No tournaments yet.</div>}
        {tournaments.map((t) => (
          <div key={t.id} className="tournament-box">
            <div style={{ flex: 1 }}>
              <input 
                type="text" 
                value={t.name} 
                onChange={(e) => onUpdate(t.id, { name: e.target.value })} 
                style={{ width: '100%', marginBottom: '8px' }}
              />
              <div className="form-row" style={{ marginTop: 8 }}>
                <select 
                  value={t.game} 
                  onChange={(e) => onUpdate(t.id, { game: e.target.value })}
                >
                  <option>FreeFire</option>
                  <option>BGMI</option>
                  <option>COD</option>
                  <option>PUBG</option>
                  <option>Valorant</option>
                  <option>COC</option>
                </select>
                <input 
                  type="date" 
                  value={t.date} 
                  onChange={(e) => onUpdate(t.id, { date: e.target.value })} 
                />
                <input 
                  type="number" 
                  value={t.fee} 
                  onChange={(e) => onUpdate(t.id, { fee: Number(e.target.value) })} 
                />
                <select 
                  value={t.status || "upcoming"} 
                  onChange={(e) => onUpdate(t.id, { status: e.target.value })}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="live">Live</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div style={{ marginTop: 8 }}>
                <input 
                  type="text" 
                  value={t.description || ""} 
                  onChange={(e) => onUpdate(t.id, { description: e.target.value })} 
                  style={{ width: "100%" }} 
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginLeft: 12 }}>
              <button className="btn-danger" onClick={() => onDelete(t.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="section card">
        <h2>Admin Settings</h2>
        <p className="small muted">Change the local admin password (stored in your browser's localStorage). This is only for demo/local use — for production use proper authentication/servers.</p>
        <AdminPasswordBox setAdminPass={setAdminPass} />
      </div>
    </div>
  );
}

/* -------------------------
   AdminLoginModal
   ------------------------- */
function AdminLoginModal({ onClose, onLogin }) {
  const [pass, setPass] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 style={{ margin: 0, color: "var(--neon)" }}>Admin Login</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <p className="small muted">Enter local admin password. (Default first-time password: <b>shadow-admin</b>)</p>
        <div style={{ marginTop: 12 }}>
          <input 
            type="password" 
            style={{ width: "100%", padding: 10, borderRadius: 8 }} 
            value={pass} 
            onChange={(e) => setPass(e.target.value)} 
            onKeyDown={(e) => e.key === "Enter" && onLogin(pass)}
            autoFocus
          />
        </div>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button className="btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={() => onLogin(pass)}>Login</button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   Admin Password change box
   ------------------------- */
function AdminPasswordBox({ setAdminPass }) {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  
  const handleSetPassword = () => {
    if (!newPass) return alert("Enter password");
    if (newPass !== confirmPass) return alert("Passwords don't match");
    
    setAdminPass(newPass);
    alert("Local admin password updated.");
    setNewPass("");
    setConfirmPass("");
  };
  
  return (
    <div>
      <div className="form-row">
        <input 
          type="password" 
          placeholder="New admin password" 
          value={newPass} 
          onChange={(e) => setNewPass(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirm password" 
          value={confirmPass} 
          onChange={(e) => setConfirmPass(e.target.value)} 
        />
        <button className="btn" onClick={handleSetPassword}>Set Password</button>
      </div>
      <div className="admin-note small muted">Note: This stores the admin password in your browser's localStorage (demo only).</div>
    </div>
  );
}

/* -------------------------
   JoinModal component
   ------------------------- */
function JoinModal({ tournament, onClose, onConfirmRegister, userProfile }) {
  const [info, setInfo] = useState({
    name: userProfile.name || "",
    gameID: userProfile.gameID || "",
    age: "",
    dob: "",
    maxKills: "",
    totalMatches: "",
  });

  const handleChange = (k, v) => setInfo((s) => ({ ...s, [k]: v }));

  const handleConfirm = () => {
    if (!info.name || !info.gameID) return alert("Enter name & game ID");
    
    const payOk = window.confirm(`Simulate payment of ${formatCurrency(tournament.fee)} via UPI (this is a demo). Click OK to confirm.`);
    if (!payOk) return;
    
    onConfirmRegister({ ...info });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 style={{ margin: 0, color: "var(--neon)" }}>Join {tournament.name}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <p className="small muted">Enter required details and confirm simulated payment.</p>

        <div style={{ marginTop: 12 }}>
          <div className="form-row">
            <input 
              type="text" 
              placeholder="Full name" 
              value={info.name} 
              onChange={(e) => handleChange("name", e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Game ID" 
              value={info.gameID} 
              onChange={(e) => handleChange("gameID", e.target.value)} 
            />
          </div>
          <div className="form-row">
            <input 
              type="number" 
              placeholder="Age" 
              value={info.age} 
              onChange={(e) => handleChange("age", e.target.value)} 
            />
            <input 
              type="date" 
              placeholder="DOB" 
              value={info.dob} 
              onChange={(e) => handleChange("dob", e.target.value)} 
            />
          </div>
          <div className="form-row">
            <input 
              type="number" 
              placeholder="Max kills (optional)" 
              value={info.maxKills} 
              onChange={(e) => handleChange("maxKills", e.target.value)} 
            />
            <input 
              type="number" 
              placeholder="Total matches (optional)" 
              value={info.totalMatches} 
              onChange={(e) => handleChange("totalMatches", e.target.value)} 
            />
          </div>
        </div>

        <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button className="btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={handleConfirm}>Pay & Join</button>
        </div>
      </div>
    </div>
  );
}

/* =============================
   Render to DOM
   ============================= */
export default App;