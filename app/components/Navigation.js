import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
 <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Image
          src="/download.jpeg"   // your logo inside /public folder
          alt="Logo"
          width={50}
          height={50}
        />
        <h2 style={{ margin: 0 }}>MyWebsite</h2>
      </div>

     <nav>
      
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>

    {/* next js routing */}
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/section">Section</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
 </div>
  );
}
