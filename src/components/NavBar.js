
function NavBar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "#222", color: "#fff" }}>
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>My Portfolio</div>
            <ul style={{ display: "flex", listStyle: "none", gap: "1.5rem", margin: 0 }}>
                <li><a href="#home" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
                <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
                <li><a href="#projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a></li>
                <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;