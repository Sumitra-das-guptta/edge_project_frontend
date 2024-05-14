import{u as S,c as H,r as i,j as e}from"./index-axmhx-Eq.js";import{e as w}from"./ResponseModal-Z_xc7FKT.js";import{R as P}from"./ResponseModal-LXQb4h69.js";const k={background:{width:"100%",height:"100vh",position:"relative",display:"flex",background:"transparent",backgroundRepeat:"no-repeat",backgroundColor:"transparent",backgroundSize:"cover",backgroundPosition:"center center"},rootDiv:{display:"flex",flexDirection:"column",width:"60%",margin:"60px auto auto auto"},buttonStyle:{fontSize:"16px",fontWeight:600,width:"100%",height:"52px",color:"white",paddingTop:"5px",textDecoration:"none",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},logIn:{fontSize:"24px",color:"#172739",fontWeight:800,margin:"0px 0px 5px 0px"},normalText:{fontSize:"14px",color:"#828282",margin:"5px 0px 20px 0px"},margin:{margin:"10px 0px 10px 0px"},setIcon:{height:"23vh",width:"100%",display:"flex",justifyContent:"center"}},U=()=>{const c=S(),{state:o}=H(),[x,O]=i.useState(["Basic Networking (60 Hrs.)","Hardware Maintenance (60 Hrs.)","Digital Marketing (60 Hrs.)","Graphics Design (60 Hrs.)","Microsoft Word & Excel (60 Hrs.)","Microsoft Word & Powerpoint (60 Hrs.)","Search Engine Optimization (60 Hrs.)","Software Testing (60 Hrs.)","Basic Web Development (60 Hrs.)","Basic Programming with Python (60 Hrs.)","Video Production & Editing (60 Hrs.)","C# .NET (80 Hrs.)","Full Stack Development with ReactJS, DOT NET(.NET 6.0 &.NET Web API) & SQL Server (80 Hrs.)","Value System Engineering for Building New Ventures (80 Hrs.)","Database (MySQL / Oracle / SQL Server) (80 Hrs.)","Front-End Developer (React / NodeJS / VueJS / Angular JS) (80 Hrs.)","Java (any popular framework) (80 Hrs.)","PHP (Laravel) (80 Hrs.)","Python (Django) (80 Hrs.)","Quality Assurance & Software Testing (80 Hrs.)","WordPress (80 Hrs.)","User Experience (UX) Design (80 Hrs.)","Embark on DevOps (80 Hrs.)","Mobile App Development (80 Hrs.)"]),[m,I]=i.useState(["CNC & 3D Printing for Industrial Automation (60 Hrs.)"]);i.useState(["Software Aided Civil Engineering Design & Analysis (80 Hrs.)"]);const[p,A]=i.useState(["Digital Design for Industrial Control (80 Hrs.)","Power System Operation & Service Design (80 Hrs.)"]),[h,R]=i.useState(["Environmental Experience Design (EXD) (60 Hrs.)"]),[g,T]=i.useState(["GIS & its Application (80 Hrs.)","Remote Sensing & its Application (80 Hrs.)"]),[u,M]=i.useState(["GIS & its Application (80 Hrs.)"]);i.useState(["Data Analytics in Oil, Gas and Energy Industry (80 Hrs.)"]);const[f,B]=i.useState(["Industrial Automation (60 Hrs.)"]),[b,C]=i.useState(["Basic Web Development (60 Hrs.)","Basic Programming with Python (60 Hrs.)","Embark on DevOps (80 Hrs.)"]),[v,W]=i.useState(["Basic Programming with Python (60 Hrs.)"]),[n,j]=i.useState(""),[s,d]=i.useState({usedPurpose:"",visible:!1,message:"",footerMessage:""}),[r,y]=i.useState(""),l=(t,a)=>{j(t),y(a)},D=()=>{o!=null&&o.email?c("/register/2",{state:{email:o==null?void 0:o.email,course:n,organizerDeptOrInstituteOrCenter:r}}):d({...s,visible:!0,usedPurpose:"Error",message:"Please Verify your email first",footerMessage:"Close"})},E=()=>{d({...s,visible:!1,usedPurpose:"",message:"",footerMessage:""}),c("/")},N=t=>{d({...s,visible:t})};return i.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"}),o||c("/login")},[]),e.jsxs(e.Fragment,{children:[(s==null?void 0:s.visible)&&e.jsx(P,{usedPurpose:s==null?void 0:s.usedPurpose,message:s==null?void 0:s.message,footerMessage:s==null?void 0:s.footerMessage,handleFooterClick:E,setModalVisible:N}),e.jsxs("div",{className:"mx-[2%] sm:mx-[10%] mt-[13vh] mb-6 border-2 border-[#e5e7eb] p-5 rounded shadow-[0px_0px_9px_0px]",children:[e.jsx("img",{src:w,alt:"edge_heading",className:"w-full"}),e.jsx("div",{style:{fontSize:"20px",fontWeight:"600"},children:"Enhancing Digital Government & Economy (EDGE) Project"}),e.jsx("div",{style:{fontSize:"14px"},children:"Digital Skills Training initiative for students, a premier learning opportunity presented by the EDGE Project of the Bangladesh Computer Council, ICT Division "}),e.jsx("div",{className:"font-bold text-base text-[#00cb00] text-center mt-1",children:"Only Honours third and fourth year students are encouraged to apply."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:k.logIn,children:"Choose your preferred course"}),e.jsxs("div",{className:"m-auto",children:[e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Open for All Department's students"}),e.jsx("div",{children:x.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="IICT",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"IICT")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Mechanical Engineering"}),e.jsx("div",{children:m.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Mechanical Engineering",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Mechanical Engineering")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Electrical & Electronics Engineering"}),e.jsx("div",{children:p.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Electrical & Electronics Engineering",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Electrical & Electronics Engineering")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Architechture Department"}),e.jsx("div",{children:h.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Architechture",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Architechture")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Urban & Regional Planning Department"}),e.jsx("div",{children:g.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Urban & Regional Planning",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Urban & Regional Planning")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Water Resources Engineering"}),e.jsx("div",{children:u.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Water Resources Engineering",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Water Resources Engineering")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Mechatronics & Industrial Engineering"}),e.jsx("div",{children:f.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Mechatronics & Industrial Engineering",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Mechatronics & Industrial Engineering")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Electronics & Telecommunication Engineering"}),e.jsx("div",{children:b.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Electronics & Telecommunication Engineering",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Electronics & Telecommunication Engineering")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]}),e.jsxs("div",{className:"pb-4",children:[e.jsx("div",{className:"font-bold text-base text-blue-700 mb-3 text-left",children:"Only for Students of Biomedical Engineering"}),e.jsx("div",{children:v.map((t,a)=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"radio",checked:n===t&&r==="Biomedical Engineering",style:{width:"15px",height:"15px",cursor:"pointer"},onChange:()=>{l(t,"Biomedical Engineering")}}),e.jsx("div",{className:"pl-4 text-sm",children:t})]}))})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{className:`${n===""?"bg-[#BDBDBD] cursor-not-allowed":"bg-[#1960cb] hover:bg-blue-900 active:scale-75"} text-white px-8 py-2 rounded font-medium transition-transform transform-gpu`,tabIndex:0,disabled:n==="",onClick:()=>D(),children:"Next"})})]})]})]})};export{U as default};
