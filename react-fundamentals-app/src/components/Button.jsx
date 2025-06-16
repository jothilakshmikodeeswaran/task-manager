

function Button ({ text, type = "button", onClick, disabled}){
    return(

<button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>

    )
}export default Button;

//Activity 1

// interface ButtonProps {
//   text: string;
//   type?: 'button' | 'submit' | 'reset';
//   onClick?: () => void;
//   disable?: boolean
// }

// function Button({text, type, onClick, disable}: ButtonProps) {
//   return (
//     <button 
//     type={type ? type : "button"}
//     onClick={onClick ? onClick: null}
//     disabled={disable ? disable : false}
//     >
//       {text}
//     </button>
//   )
// }

// export default Button


//Activity 2

// import './styles.css'; // Import styles
//  import Button from "./components/Button"
// import Section from './components/Section'

// export default function App() {
//   const handlePrimaryClick = () => {
//     alert('Primary button clicked!');
//   };
 
//   return (
//     <Section title="Main Section">
//       <h1>Button Examples</h1>
//       <Section title="David">
//         <Button text="Click me!" />      
//       </Section>
//       <Button text="Sign in" onClick={() => alert("Welcome")}/>      
//     </Section>
//   );
// }

// interface SectionProps {
//   title:string;
//   children: React.ReactNode
// }

// export default function Section({title, children}: SectionProps) {
//   return (
//     <section style={{border: "1px solid red"}}>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   )
// }