import logo from './logo.svg';
import './App.css';
import Card from './card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TopBar from './topbar';
import Pricing from './pricing';


function App() {
  var cardDetails=[
    {
      planName:"Free",
      price:0,
      features:[
        {
          name:"10 users included"
        },
        {
          name:"2 GB of storage"
        },
        {
          name:"Email support"
        },
        {
          name:"Help center access"
        },
      ]
    },
    {
      planName:"Pro",
      price:20,
      features:[
        {
          name:"20 users included"
        },
        {
          name:"10 GB of storage"
        },
        {
          name:"Priority email support"
        },
        {
          name:"Help center access"
        },
      ]
    },
    {
      planName:"Enterprice",
      price:30,
      features:[
        {
          name:"30 users included"
        },
        {
          name:"15 GB of storage"
        },
        {
          name:"Phone and email support"
        },
        {
          name:"Help center access"
        },
      ]
    },
  ]
  return(
   <div className="container py-3">
    <header>
    <TopBar></TopBar>
    <Pricing></Pricing>
    </header>
    <main>
   <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
   {
    cardDetails.map((card)=>{
      return <Card card={card}></Card>
    })
   }
   </div>
    </main>
   </div>
  ); 
}

export default App;
