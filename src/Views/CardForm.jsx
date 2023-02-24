import React from 'react'
import '../Styling/Cardform.css'
import Header from '../Components/Header'
import Card from '../Components/Card'
import BTC from '../assets/vendor-bitcoin.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'





export default function CardForm(props) {
    const { cards } = props;

    const[Cnumbers,setCnumbers]=useState("");
    const[Cname,setCname]=useState("");
    const[Cvalid,setCvalid]=useState("");
    const[Cccv,setCccv]=useState("");
    const[Vendorlist,setVvendor]=useState("");

    const navigate = useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();
        var idHelp = cards.length + 1;
        if(Cnumbers&&Cname&&Vendorlist){
                const cardData = [{ id: idHelp,number : Cnumbers, name: Cname, date : Cvalid, CCV : Cccv, vendor : Vendorlist}];
                console.log(cardData);
            props.onAddCard(cardData);
            navigate('/');

        }

    }

    return(
        <div className="CardForm">
        <Header
            Title={"ADD A NEW BANK CARD"}
            subTitle="NEW CARD" 
        />

        <Card 
        vendor={BTC}
        number="XXXX XXXX XXXX XXXX"
        name="FIRSTNAME LASTNAME"
        date="MM/YY"
        />

<form onSubmit={handleSubmit}>

        <div className="Input--Field">
            <p className="Form--Text">CARD NUMBER</p>
            <input placeholder="XXXX XXXX XXXX XXXX" className='Input--Box' name="Cnumbers" value={Cnumbers} onChange={(e)=>setCnumbers(e.target.value)}/>
        </div>

        <div className="Input--Field">
            <p className="Form--Text">CARDHOLDER NAME</p>
            <input placeholder="FIRSTNAME LASTNAME" className='Input--Box' name="Cname" value={Cname} onChange={(e)=>setCname(e.target.value)}/>
        </div>
    
    <div className='DualInput'>
        <div className="Input--Field">
            <p className="Form--Text">VALID THRU</p>
            <input placeholder="MM/YY" className='Input--Box' name="Cvalid" value={Cvalid} onChange={(e)=>setCvalid(e.target.value)}/>
        </div>

        <div className="Input--Field">
            <p className="Form--Text">CCV</p>
            <input placeholder="XXX" className='Input--Box' name="Cccv" value={Cccv} onChange={(e)=>setCccv(e.target.value)}/>
        </div>
    </div>
        


        <label htmlFor="Vendor" className='VList'>Vendor</label>
        <select name="VendorList" className='Voptions' value={Vendorlist} onChange={(e)=>setVvendor(e.target.value)}>
            <option hidden disabled defaultValue></option>
            <option value="BTC" >BITCOIN INC</option>
            <option value="NINJA" >NINJA BANK</option>
            <option value="BLOCK" >BLOCK CHAIN INC</option>
            <option value="EVIL" >EVIL CORP</option>
        </select>
        <button
        className='CardForm--Button'
        onClick={handleSubmit}
        >
            
            ADD CARD
        </button>
    </form>
    
    </div>
    )
    
}