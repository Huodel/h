import React, {useState,useRef,useEffect} from 'react'
import icon from './logo.svg';
import './App.css';
import './App2.css';
import './Anim.css';
import temp from './temp.json';
import logo from './assets/logo.png';
import edit from './assets/edit.svg';
import shift from './assets/shift.svg';
import txt from './assets/txt.svg';
import userlogo from './assets/user-square.svg';
import home from './assets/home.svg';
import clients from './assets/clients.svg';
import massage from './assets/massage.svg';
import history from './assets/history.svg';
import progress from './assets/progress.svg';
import Payroll from './assets/Payroll.svg';
import settings from './assets/settings.svg';
import report from './assets/report.svg';
import file from './assets/file.svg';
import search from './assets/search.svg';
import userC  from './assets/user-circle .svg';
import notification from './assets/notification.svg';
import ddown from './assets/ddown.svg';
import graph from './assets/graph.svg';
import favorite from './assets/favorite.svg';
import branch from './assets/branch.svg';
import expand from './assets/expand.svg';
import user from './assets/user.svg';
import menu from './assets/menu.svg';
import oooo from './assets/new.svg';
import upload from './assets/upload.svg';
import share from './assets/share.svg';
import finance from './assets/finance.svg';
import finance2 from './assets/finance2.svg';
import finance3 from './assets/finance3.svg';
import finance4 from './assets/finance4.svg';
import arrow from './assets/arrowdown.svg';
import reports from './assets/reports.svg';
import reportsu from './assets/reportsu.svg';
import reports2 from './assets/reports2.svg';
import max from './assets/maximize-1-svgrepo-com.svg';

import del from './assets/delete.svg';


//import axios from 'axios';

function App() {

 // const rawFile = new XMLHttpRequest();
 // rawFile.open("GET", temp, false);
 // rawFile.onreadystatechange = function () {
 //   if(rawFile.readyState === 4)  {
 //     if(rawFile.status === 200 || rawFile.status == 0) {
 //       const allText = rawFile.responseText;
 //       console.log(allText);
 //      }
 //   }
 // }
 // rawFile.send(temp);
const [drift, setdrift] = useState(1)
const [reen, setreen] = useState(1)
const [dash, setdash] = useState(1)
const [bal, setbal] = useState('bal')
const [psi, setpsi] = useState("psi")
const [pop, setpop] = useState(0)
const [casecom, setcom] = useState(1)

const [fss, setfss] = useState(0)

const [sli, setsli] = useState("slider")
const [sli2, setsli2] = useState("slider2")

const [winheight, setwinheight] = useState(document.documentElement.clientHeight)
const [winwidth, setwinwidth] = useState(document.documentElement.clientWidth)

window.addEventListener('resize', function() {
 setwinheight(document.documentElement.clientHeight);
 setwinwidth(document.documentElement.clientWidth)
}, true);

useEffect(() => { 
  //initialize() 
  overtry()
 }, [])


const cololibe1 = [ "green","blue","pink","yellow","orange" ]
const cololibe2 = [ "purple","orange","green","pink","blue" ]
const cololibe3 = [ "orange","blue","green","purple","red" ]
const poslib1 = ["100px","140px","160px","180px","200px","240px","260px","280px","-100px","-140px","-160px","-180px","-200px","-240px","-260px","-280px"]
const poslib1x = ["-100px","-120px","-140px","-160px","-180px","-200px","-240px","-260px","-280px"]
const poslib2 = ["100px","120px","140px","160px","180px","200px","240px","260px","280px"]
const poslib2x = ["-100px","-120px","-140px","-160px","-180px","-200px","-240px","-260px","-280px"]
const poslib3= ["-100px","-120px","-140px","-160px","-180px","-200px","-240px","-260px","-280px"]





function disize() { if(winheight<winwidth){return("100vh")}else{return("60vh")} }

function rnd(i){ 
  //return null
  return( i[Math.floor(Math.random() * i.length)]) 
}

const swim = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe3),
  height: disize(),
  width: disize(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib1),
  right: rnd(poslib1),
  overflow:"hidden"
}
const swim2 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe3),
  height: disize(),
  width: disize(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib1),
  right: rnd(poslib1),
  overflow:"hidden"
}

const swim3 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe3),
  height: disize(),
  width: disize(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib1),
  right: rnd(poslib1),
  overflow:"hidden"
}

const swim4 = {
  transitionDuration: "6s",
  backgroundColor: rnd(cololibe3),
  height: disize(),
  width: disize(),
  position: "absolute",
  margin: "auto",
  top: rnd(poslib1),
  bottom: "auto",
  left: rnd(poslib1),
  right: rnd(poslib1),
  overflow:"hidden"
}

function overtry() {
  setdrift(2)
  setTimeout(() => {  overtry2(2) }, 6000);
}
function overtry2() {
  setdrift(1)
  setTimeout(() => {  overtry(2) }, 6000);
}


function skipchild(e) {
  if(e.nativeEvent) {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopPropagation();
  }else
  e.preventDefault();
  e.stopPropagation();
}


function spsi() {  if(psi === "psi"){setpsi("pso")}else{setpsi("psi")} }

function flex() {  if(drift === 1){return(swim)}else{return(swim)} }  
function flex2() { if(drift === 1){return(swim2)}else{return(swim2)} }
function flex3() { if(drift === 1){return(swim3)}else{return(swim3)} }
function flex4() { if(drift === 1){return(swim4)}else{return(swim4)} }
  
 function download() {
  var iframe = document.getElementById('invisible');
  iframe.src = temp;
}

//function axigpo(i) {     
//  axios.post("http://192.168.43.223:8000/",i)
//  .then(function (res){  })
//  .catch(function (error) { });
//  }
//  
//
// function download(url) {
//  const a = document.createElement('a')
//  a.href = url
//  a.download = url.split('/').pop()
//  document.body.appendChild(a)
//  a.click()
//  document.body.removeChild(a)
//}
//
//function formpost() {
//
//  fetch(this.props.formAction, {
//      headers: {
//          'Accept': 'application/json',
//          'Content-Type': 'application/json'
//      },
//      body: JSON.stringify({description: this.state.description})
//  });
//
//  this.setState({description: 'On'});
//}

const [gpts, setgpts] = useState(1)

function screen(i) {
  if(i === reen){return({display:"block"})}else{return({display:"none"})}
}
function _pop() {
  if(1 === pop){return({display:"block"})}else{return({display:"none"})} 
}
function _popsk() {
  if(1 === pop){return("popsmoke")}else{return("popsmoke1")} 
}

function _dash(i) { if(i === dash){return({display:"block"})}else{return({display:"none"})} }
function _com(i) { if(i === casecom){return({display:"block"})}else{return({display:"none"})} }
function _ds(i) { if(i === dash){return("item2")}else{return("item")} }

function sldeme(){
  if(sli === "slider"){setsli("slideout")}else{setsli("slider")}
}
function sldeme2(){
  if(sli2 === "slider2"){setsli2("slideout2")}else{setsli2("slider2")}
}
function _fss(){
  if(fss === 0 ){return("fss")}else{return("fss2")}
}
function blurback(){  if(sli === "slider"){return("skibi2")}else{return("skibi")} }
function blurback2(){  if(sli2 === "slider2"){return("skibi2")}else{return("skibi")} }
function dashset(i) {
  setsli("slider")
  setsli2("slider2")
  setdash(i)
}

function logrun(){
  const usr = document.getElementById("usr").value
  const pas = document.getElementById("pas").value
  
  if(usr == "admin"||usr == "ADMIN"){
    if(pas == "admin"||pas == "ADMIN"){setreen(3);setdash(11)}else{setreen(2)}
  }else{setreen(2)}
}

function Rewow(params) {
  return(
    
    <div id="main5pro" style={_dash(1)} >
    <div id="dntex" >Announcements</div>

    <div id="sidechik" >

    <div id="wiji" >
      <div id="objh" >Site Maintenance</div>
      <div id="objb" >site public announcents from admin</div>
      <div id="line" ></div>
      
      <div id="objh" >Community Share Day</div>
      <div id="objb" >site public announcents from admin</div>
      <div id="line" ></div>
      
      <div id="objh" >Updated Privacy Policy</div>
      <div id="objb" >site public announcents from admin</div>
      
    <div id="pad" ></div>
      </div>

    </div>

    
    <div id="dntex2" >Updates</div>
    <div id="sidechik" >

    <div id="wiji" >
      <div id="objh" ><img id="sim" src={user} /> Site Maintenance</div>
      <div id="objb" >site public announcents from admin</div>
      <div id="line" ></div>
      
      <div id="objh" ><img id="sim" src={user} />Community Share Day</div>
      <div id="objb" >site public announcents from admin</div>
      <div id="line" ></div>
      
      <div id="objh" ><img id="sim" src={user} />Updated Privacy Policy</div>
      <div id="objb" >site public announcents from admin</div>
      
    <div id="pad" ></div>
      </div>

    </div>
    <div id="pad" ></div>
    
    </div>
  )

  
}


  function Welltest() {
    return(
    <div id="wiji" >
      
      
    <center>
    <div ><img id="cimage" src={user} /> </div>
    <div id="cname" > Client Name</div></center>
      <div id="objb" ><span>Gender</span > <span id="nwaspan" >Others</span> </div>
      <div id="objb" ><span>Age</span> <span id="nwaspan" >23</span> </div>
      <div id="objb" ><span>Address</span> <span id="nwaspan" >Them</span> </div>
      <div id="line" ></div>
      <div id="pedi" >My bio</div>

      <div id="bdata" >Jerry Smith is a race car driver at Hendrick Motorsports with five years’ experience making speedy turns for several hours, helping his thousands of fans to fulfill their entertainment needs. Specializing in left turns and safely overtaking his opponents in the pursuit of a checkered flag, Jerry uses that expertise to never come in last.

By focusing on making sure Hendrick Motorsports ends up in the winner’s circle at every race, Jerry has been able to put the racing certifications he earned at driver’s school to good use. Over the years, his strengths at Hendrick Motorsports have garnered some recognition for winning several races each year. Jerry may spend his days at the racetrack, but it’s the thrill of the race and the glory of coming in first that gets him up in the morning.

When he’s not behind the wheel, Jerry is an avid fisherman and loves spending time in the great outdoors.</div>
      
    <div id="pad" ></div>
      </div>
)
  }

  
function Rewow2() {
  return(
    
    <div id="main5pro" style={_dash(2.1)} >
    <div id="dntex" >              </div>

    <div id="sidechik" >


    <Welltest/>

    </div>
    
    </div>
  )
}

 return(
  <div id="skin" >

    <div id="pop" style={_pop()} > 
    <div id="rr" ><span id="fat" >⚠️</span> Are you sure you want to delete  </div>
    <div id="mmajiha" ><div id="jiha" >Delete</div> <div id="jiha" onClick={e=> setpop(0)} >Cancel</div></div> </div>

    <div id={_popsk()} onClick={e=> setpop(0)} ></div>
    
    <div id={blurback()}   onClick={e=> sldeme() } ></div>
    <div id={blurback2()}    onClick={e=> sldeme2() } ></div>
    

        <div id={sli} style={screen(2)} >
            <div onClick={e=> sldeme()} > <img alt='img'  id="jagaban2" src={menu} /></div>
        <div id="carpetpro" ></div>
          <div id={_ds(1)} onClick={e=> dashset(1)} ><img alt="img" id="minim" src={home} /> <div id="itex" >Dashboard</div> </div>
          <div id={_ds(2)} onClick={e=> dashset(2)} ><img alt="img" id="minim" src={clients} /> <div id="itex" >Clients</div> </div>
          <div id={_ds(3)} onClick={e=> dashset(3)} ><img alt="img" id="minim" src={massage} /> <div id="itex" >Messages</div> </div>
          <div id={_ds(4)} onClick={e=> dashset(4)} ><img alt="img" id="minim" src={history} /> <div id="itex" >History</div> </div>
          <div id={_ds(5)} onClick={e=> dashset(5)} ><img alt="img" id="minim" src={progress} /> <div id="itex" >Progress</div> </div>
          <div id={_ds(6)} onClick={e=> dashset(6)} ><img alt="img" id="minim" src={Payroll} /> <div id="itex" >Payroll</div> </div>
          <div id={_ds(7)} onClick={e=> dashset(7)} ><img alt="img" id="minim" src={settings} /> <div id="itex" >Settings</div> </div>
          <div id={_ds(8)} onClick={e=> dashset(8)} ><img alt="img" id="minim" src={report} /> <div id="itex" >Report</div> </div>
          <div id={_ds(9)} onClick={e=> dashset(9)} ><img alt="img" id="minim" src={file} /> <div id="itex" >Files</div> </div>
        </div>
        
        
    <div onClick={e=> sldeme()}  style={screen(2)} > <img alt='img'  id="jagaban" src={menu} /></div>


    

{/*___________________________________________ Admin _______________________________________________*/}


      <div id="karen" style={screen(3)} >


    
        <div id={sli2} >
            <div onClick={e=> sldeme2()} > <img alt='img'  id="jagaban2" src={menu} /></div>
        <div id="carpetpro" ></div>
          <div id={_ds(21)} onClick={e=> dashset(21)} ><img alt="img" id="minim" src={home} /> <div id="itex" >Dashboard</div> </div>
          <div id={_ds(22)} onClick={e=> dashset(22)} ><img alt="img" id="minim" src={clients} /> <div id="itex" >Clients</div> </div>
          <div id={_ds(23)} onClick={e=> dashset(23)} ><img alt="img" id="minim" src={massage} /> <div id="itex" >Staff</div> </div>
          <div id={_ds(24)} onClick={e=> dashset(24)} ><img alt="img" id="minim" src={history} /> <div id="itex" >History</div> </div>
          <div id={_ds(25)} onClick={e=> dashset(25)} ><img alt="img" id="minim" src={progress} /> <div id="itex" >Incidents</div> </div>
          <div id={_ds(26)} onClick={e=> dashset(26)} ><img alt="img" id="minim" src={shift} /> <div id="itex" >Shifts</div> </div>
          <div id={_ds(27)} onClick={e=> dashset(27)} ><img alt="img" id="minim" src={settings} /> <div id="itex" >Payroll</div> </div>
          <div id={_ds(28)} onClick={e=> dashset(28)} ><img alt="img" id="minim" src={report} /> <div id="itex" >Documents</div> </div>
        </div>

    <div onClick={e=> sldeme2()}  style={screen(3)} > <img alt='img'  id="jagaban" src={menu} /></div>


    

        <div id="maincase" style={_dash(11)} >


        <img alt="img" id="search" src={search} />
          <div id="usname"  >Lazovil</div>
          <img alt="img" id="usseric" src={userC} />
          <img alt="img" id="notify" src={notification} />
          <input id="pio"/>
          
          <div id="firsl2" >
          <img alt="img" id="minage" src={userC} />

          <div id="mcn" >
            <div id="hiname" >Hi there,</div>
            <div id="lowname" >Lilian Roseville (@LilRoseville)</div>
          </div>

           <div id="sbtpos" >
           <div id="scrbt" >Add</div>
            </div>

          <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

            <div id={psi} >
           <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
            </div>
          </div>


        <div id="gpt1"  >
            
            <center >

              <div id="messagecase3" >

            <div id="dntex" >Analytics</div>
          <div> Full statistics </div>
          

    <div id="confesion" >
      <div id="onepac">
        <div id="pac" >
          <div id="ph" >Team payments</div>
          <div id="pmg" ><img alt="img" id="img" src={finance} /></div>
          <div id="pbod" >30-dec-2023</div>
          <div id="minpbod" >Recent</div>
        </div>
        <div id="pac" >
          <div id="ph" >All payments</div>
          <div id="pmg" ><img alt="img" id="img" src={finance2} /></div>
          <div id="pbod" >$785,839</div>
          <div id="minpbod" >Total payments</div></div>
      </div>
      <div id="twopac">
        
      <div id="pac" >
          <div id="ph" >Statistics</div>
          <div id="pmg" ><img alt="img" id="img" src={finance3} /></div>
          <div id="pbod" >839</div>
          <div id="minpbod" >Recent activity</div></div>
          
        <div id="pac" >
          <div id="ph" >Staff Manafement</div>
          <div id="pmg" ><img alt="img" id="img" src={finance4} /></div>
          <div id="pbod" >39</div>
          <div id="minpbod" >Active Staff</div></div>

      </div>
    </div>

    
    <div id="incase3" >
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
              </div>
            <div id="line" ></div>
            <div id="ichtime" >Last 24 hrs</div>
            <div id="incase3" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >From To </div></div>
                <div id="allcol" ><div id="tah" >progress  </div></div>
                <div id="allcol1" ><div id="tah" >Date </div></div>
                <div id="allcol2" ><div id="tah" >Client </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >8.00am 1.00pm</div></div>
                <div id="allcol" ><div id="tab" >panadol 2*3</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx1" > Completed Task</div></div></div>
                <div id="allcol2" ><div id="tab2" >BornaventureBornaventure</div></div>
              </div>

              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >8.00am 1.00pm</div></div>
                <div id="allcol" ><div id="tab" >panadol 2*3panadol 2*3panadol 2*3</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" > Pending Task</div></div></div>
                <div id="allcol2" ><div id="tab2" >BornaventureBornaventure</div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >8.00am 1.00pm</div></div>
                <div id="allcol" ><div id="tab" >panadol 2*3</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx3" > Failed Task</div></div></div>
                <div id="allcol2" ><div id="tab2" >BornaventureBornaventure</div></div>
              </div>

                </div>

              </div>
            </center>
            </div></div>


            <div id="maincase" style={_dash(21)} >

<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

      <div id="messagecase3" >

    <div id="dntex" >Analytics</div>
  <div> Full statistics </div>
  

<div id="confesion" >
<div id="onepac">
<div id="pac" >
  <div id="ph" >Team payments</div>
  <div id="pmg" ><img alt="img" id="img" src={finance} /></div>
  <div id="pbod" >30-dec-2023</div>
  <div id="minpbod" >Recent</div>
</div>
<div id="pac" >
  <div id="ph" >All payments</div>
  <div id="pmg" ><img alt="img" id="img" src={finance2} /></div>
  <div id="pbod" >$785,839</div>
  <div id="minpbod" >Total payments</div></div>
</div>
<div id="twopac">

<div id="pac" >
  <div id="ph" >Statistics</div>
  <div id="pmg" ><img alt="img" id="img" src={finance3} /></div>
  <div id="pbod" >839</div>
  <div id="minpbod" >Recent activity</div></div>
  
<div id="pac" >
  <div id="ph" >Staff Manafement</div>
  <div id="pmg" ><img alt="img" id="img" src={finance4} /></div>
  <div id="pbod" >39</div>
  <div id="minpbod" >Active Staff</div></div>

</div>
</div>

<div id="dytex" >Staff list</div>
<div id="confeto" > 
  <div id="bonadit" > <div id="bornfl" ><img id="img" alt="img" src={arrow} /></div>
  <div id="confic" > <img id="img" alt="img" src={user} /></div>
  <div id="allbon" >
    <div id="boname" >Bornaventure</div>
    <div id="bomin" >mar 9, 2023 <span id="bonticktex" >$4,392</span></div>
    </div>
  </div> </div>

  
<div id="dytex" >Clients</div>


<div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Name </div></div>
                <div id="allcol" ><div id="tah" >Age  </div></div>
                <div id="allcol1" ><div id="tah" >Condition </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Details</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Details</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Details</div></div></div>
              </div>

                </div>


      </div>
    </center>
    </div></div>  



{/*>>>>>_____________________________  Client ______________________________________>>>>>>>> */}

    <div id="maincase" style={_dash(22)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

      <div id="messagecase3" >

    <div id="dntex3" >Clients</div>
  <div id="facase" > <div id={_fss()} > </div>  
    <div onClick={e=> setfss(0)} id="fsspace2" >Statistics</div> 
    <div onClick={e=> setfss(1)} id="fsspace" >Add</div>  </div>
  

<div id="con" style={{marginTop:"70px"}} >
  <div id="adnew" >

    <div id="simage" ><img  id="img" src={userlogo} alt="img" /> </div>

    <div id="adnsec1" >

<div id="formblock" >
  <div id="inpn" >Patient Name</div>
  <div id="inp" ><input id="imp" /></div></div>

<div id="formblock" >
  <div id="inpn" >Addrress</div>
  <div id="inp" ><input id="imp" /></div></div>

<div id="formblock" >
  <div id="inpn" >Age</div>
  <div id="inp" ><input id="imp" /></div></div>
  <div id="formblock" >
  <div id="inpn" >Condition</div>
  <div id="inp" ><input id="imp" /></div></div>

  </div>

    <div id="adnsec1" >
  
  <div id="formblock" >
  <div id="inpn" >Gender</div>
  <div id="inp" ><input id="imp" /></div></div>

  <div id="formblock" >
  <div id="inpn" >Email</div>
  <div id="inp" ><input id="imp" /></div></div>

  <div id="formblock" >
  <div id="inpn" >Date of Birth</div>
  <div id="inp" ><input id="imp" placeholder="eg 12/18/2023 OR 12-18-2020" /></div>
  </div>
  </div>


<div id="formblock"  >
  <div id="impbtt">Upload</div></div>
    </div>
</div>

  
<div id="dytex" >Clients</div>


<div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Name </div></div>
                <div id="allcol" ><div id="tah" >Age  </div></div>
                <div id="allcol1" ><div id="tah" >Condition </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" onClick={e=> setdash(22.1)} ><div id="btx2" >Details</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Details</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Details</div></div></div>
              </div>

                </div>


      </div>
    </center>
    </div></div>  

{/*>>>>>_____________________________  Client .1 ______________________________________>>>>>>>> */}
    

    <div id="maincase" style={_dash(22.1)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

      <div id="messagecase3" >

  <div id="facase" > <div id={_fss()} > </div>  
    <div onClick={e=> setfss(0)} id="fsspace2" >Statistics</div> 
    <div onClick={e=> setfss(1)} id="fsspace" >Add</div>  </div>

  
<div id="dytex" >Staff</div>

<div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Name </div></div>
                <div id="allcol" ><div id="tah" >Age  </div></div>
                <div id="allcol1" ><div id="tah" >Condition </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" onClick={e=> setdash(22.1)} ><div id="btx2" >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70</div></div>
                <div id="allcol2" ><div id="tab2" >Down syndrome</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

                </div>


                
                <div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Staff </div></div>
                <div id="allcol" ><div id="tah" >Contract  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(22.1)} >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

                </div>


      </div>
    </center>
    </div></div>  



{/*>>>>>_____________________________  Staff ______________________________________>>>>>>>> */}

<div id="maincase" style={_dash(23)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

  <div id="facase" > <div id={_fss()} > </div>  
    <div onClick={e=> {setfss(0);setcom(1)}} id="fsspace2" >New staff account</div> 
    <div onClick={e=> {setfss(1);setcom(2)}} id="fsspace" >Staff Profile</div>  </div>

      <div id="messagecase3" style={_com(1)} >

    <div id="dntex3" >Staff</div>
  

    <div id="con" style={{marginTop:"70px"}} >
  <div id="adnew" >

    <div id="simage" ><img  id="img" src={userlogo} alt="img" /> </div>

    <div id="adnsec1" >

<div id="formblock" >
  <div id="inpn" >Full Name</div>
  <div id="inp" ><input id="imp" /></div></div>

<div id="formblock" >
  <div id="inpn" >Addrress</div>
  <div id="inp" ><input id="imp" /></div></div>

<div id="formblock" >
  <div id="inpn" >Age</div>
  <div id="inp" ><input id="imp" /></div></div>
  <div id="formblock" >
  <div id="inpn" >Position / duty</div>
  <div id="inp" ><input id="imp" /></div></div>

  </div>

    <div id="adnsec1" >
  
  <div id="formblock" >
  <div id="inpn" >Gender</div>
  <div id="inp" ><input id="imp" /></div></div>

  <div id="formblock" >
  <div id="inpn" >Email</div>
  <div id="inp" ><input id="imp" /></div></div>

  <div id="formblock" >
  <div id="inpn" >Date of Birth</div>
  <div id="inp" ><input id="imp" placeholder="eg 12/18/2023 OR 12-18-2020" /></div>
  </div>
  </div>


<div id="formblock"  >
  <div id="impbtt">Upload</div></div>
    </div>
</div>
  
<div id="dytex" >Assign duty</div>


<div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Client </div></div>
                <div id="allcol" ><div id="tah" >Contract  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(22.1)} >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

                </div>
                
                

      </div>
      
      <div id="messagecase3" style={_com(2)} >
  


<div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Staff </div></div>
                <div id="allcol" ><div id="tah" >Contract  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>


              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>


              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>


              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>


              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>


              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>


              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>

                </div>
                
                

      </div>

    </center>
    </div></div>  

{/*>>>>>_____________________________  Staff .1 ______________________________________>>>>>>>> */}
    

<div id="maincase" style={_dash(23.1)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

      <div id="messagecase3" >

  <div id="facase" > <div id={_fss()} > </div>  
    <div onClick={e=> setfss(0)} id="fsspace2" >Statistics</div> 
    <div onClick={e=> setfss(1)} id="fsspace" >Add</div>  </div>

  
<div id="dytex" >Staff</div>


<div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Staff </div></div>
                <div id="allcol" ><div id="tah" >Contract  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(22.1)} >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

                </div>
                
                
                
                <div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Staff </div></div>
                <div id="allcol" ><div id="tah" >Contract  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.1)} >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" >Assign</div></div></div>
              </div>

                </div>


      </div>
    </center>
    </div></div>  

{/*>>>>>_____________________________  Staff .2 ______________________________________>>>>>>>> */}

<div id="maincase" style={_dash(23.2)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >
{/*WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW*/}
    </center>
    </div></div>  
{/*>>>>>_____________________________  Staff .3 ______________________________________>>>>>>>> */}

<div id="maincase" style={_dash(23.3)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

  <div id="facase" > <div id={_fss()} > </div>  
    <div onClick={e=> {setcom(1)}} id="fsspace2" >New staff account</div> 
    <div onClick={e=> setcom(2)} id="fsspace" >Staff Profile</div>  </div>
  
      <div id="messagecase3"  >

    <div id="dntex" >Staff</div>
  

            <div id="messagecase2" >

                <div id="proplus" >Staff profile</div>
                <div id="proplusu" >Payroll</div>
                <div id="proplusu" >Data export</div>
                
                <div id="concase" >
                  <div id="mpn" >My profile</div>
                  <div id="spri" ><img alt='img' id='img' src={user} /> </div>

                  <div id="lipro" >
                    <div id="prosetname" >Lilian Roseville (@LilRoseville</div>
                    <div id="profsepos" >Senior staff</div>
                    <div id="profsetori" >Leeds United kingdom</div>
                  </div>

                  <div id="edibut" >Edit <img alt="img" id="img" src={edit} /> </div>

                  <div id="afproset" ><div id="line" ></div></div>
                  
                  <div id="pinfo" >Personal information</div>

                  <div id="profed" ><div id="nkeizizi" >Fist Name</div> <div id="nknonairu" >Lillian</div></div>
                  <div id="profed" ><div id="nkeizizi" >Last Name</div> <div id="nknonairu" >Roseville</div></div>
                  <div id="profed" ><div id="nkeizizi" >E-mail</div> <div id="nknonairu" >roseville@lilRoseville.com</div></div>
                  <div id="profed" ><div id="nkeizizi" >Phone</div> <div id="nknonairu" >+0022 38383</div></div>

                  <div id="edibut2" >Edit <img alt="img" id="img" src={edit} /> </div>
                  
                  <div id="afproset2" ><div id="line" ></div></div>
                  
                  <div id="pinfo" >Assigned clients</div>


                  <div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Staff </div></div>
                <div id="allcol" ><div id="tah" >Contract  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>

              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >70Yrs</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" onClick={e=> setdash(23.3)} >Profile</div></div></div>
              </div>
              
              

                </div>
                

                </div>

              </div>
      </div>
      
    </center>
    </div></div>  

{/*>>>>>_____________________________  History  ______________________________________>>>>>>>> */}

<div id="maincase" style={_dash(24)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

      <div id="messagecase3" >

    <div id="dntex" >History</div>
  <div id="facase" > <div id={_fss()} > </div>  
    <div onClick={e=> {setfss(0);setdash(23)}} id="fsspace2" >New staff account</div> 
    <div onClick={e=> setfss(1)} id="fsspace" >Staff Pro</div>  </div>
  


            <div id="messagecase2" >

                <div id="proplus" >History </div>
                <div id="proplusu" >Payroll</div>
                <div id="proplusu" >Export</div>
                
                
                <div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Staff </div></div>
                <div id="allcol" ><div id="tah" >Date  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>

              
              
              

                </div>

              </div>
                
                

      </div>
    </center>
    </div></div>  
{/*>>>>>_____________________________  History  ______________________________________>>>>>>>> */}

<div id="maincase" style={_dash(25)} >


<img alt="img" id="search" src={search} />
  <div id="usname"  >Lazovil</div>
  <img alt="img" id="usseric" src={userC} />
  <img alt="img" id="notify" src={notification} />
  <input id="pio"/>
  
  <div id="firsl2" >
  <img alt="img" id="minage" src={userC} />

  <div id="mcn" >
    <div id="hiname" >Hi Boss,</div>
    <div id="lowname" >Admin</div>
  </div>

   <div id="sbtpos" >
   <div id="scrbt" >Add</div>
    </div>

  <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

    <div id={psi} >
   <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
    </div>
  </div>


<div id="gpt1"  >
    
    <center >

      <div id="messagecase3" >

    <div id="dntex" >
Incidents</div>
  


            <div id="messagecase2" >

                <div id="proplus" >Recent Incidents </div>
                <div id="proplusu" >All Incidents</div>
                <div id="proplusu" hidden="hidden" >Export</div>
                
    <div id="confesion" >
      <div id="onepac">
        <div id="pac" >
          <div id="ph" >Total Reports</div>
          <div id="pmg" ><img alt="img" id="img" src={reports2} /></div>
          <div id="pbod" >96 Reports</div>
          <div id="minpbod" >Incidents Recent</div>
        </div>
        <div id="pac" >
          <div id="ph" >Unread Reports</div>
          <div id="pmg" ><img alt="img" id="img" src={reportsu} /></div>
          <div id="pbod" >6 Reports</div>
          <div id="minpbod" >Total payments</div></div>
      </div>
      <div id="twopac">
        
      <div id="pac" >
          <div id="ph" >Viewed Report</div>
          <div id="pmg" ><img alt="img" id="img" src={reports} /></div>
          <div id="pbod" >839</div>
          <div id="minpbod" >Recent activity</div></div>
          
        <div id="pac" >
          <div id="ph" >Staff Manafement</div>
          <div id="pmg" ><img alt="img" id="img" src={finance4} /></div>
          <div id="pbod" >39</div>
          <div id="minpbod" >Active Staff</div></div>

      </div>
    </div>

                
                
                <div id="incase2" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Staff </div></div>
                <div id="allcol" ><div id="tah" >Date  </div></div>
                <div id="allcol1" ><div id="tah" >task </div></div>
                <div id="allcol2" ><div id="tah" > </div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>
              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >Bornaventure</div></div>
                <div id="allcol" ><div id="tab" >20-12-2023</div></div>
                <div id="allcol2" ><div id="tab2" >Atend to Kardi</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2"  >Delete</div></div></div>
              </div>

              
              
              

                </div>

              </div>
                
                

      </div>
    </center>
    </div></div>  

      </div>


{/*___________________________________________ Admin end _______________________________________________*/}    


    <div id="logcase" style={screen(1)} >
      
      <div id="loui" >
      <div id="ucase" >
        <input id="usr" placeholder="USERNAME" />
        <input id="pas" placeholder="PASSWORD" />
        <div id="igi" onClick={e=> logrun()} >LOGIN</div>
      </div>
      <div id="userlogo" ><img src={userlogo} id="img" /></div>
      </div>


      

    </div>
      <div id="rounder" style={screen(1)} >
        <div id="bored" style={flex()} ></div>
        <div id="bored" style={flex2()} ></div>
        <div id="bored" style={flex3()} ></div>
      </div>
      <div id="carpet" style={screen(1)} ></div>
      

      <div style={screen(2)} onClick={e=> setpsi("psi")} >




        <div id="maincase" >
          <img alt="img" id="search" src={search} />
          <div id="usname"  >Lazovil</div>
          <img alt="img" id="usseric" src={userC} />
          <img alt="img" id="notify" src={notification} />
          <input id="pio"/>
          
          <div id="firsl" >
          <img alt="img" id="minage" src={userC} />

          <div id="mcn" >
            <div id="hiname" >Hi there,</div>
            <div id="lowname" >Lilian Roseville (@LilRoseville)</div>
          </div>

           <div id="sbtpos" >
           <div id="scrbt" >New</div>
           <div id="scrbt" >Upload</div>
           <div id="scrbt" >Share</div>
            </div>

          <div id="spld" onClick={e=> {spsi();skipchild(e)}} ><img alt="img" id="img" src={ddown}  /></div>

            <div id={psi} >
           <div id="inpsl" ><img id="meme" src={oooo} /><span id="rose" >New</span></div>
           <div id="inpsl" ><img id="meme" src={upload} /><span id="rose" >Upload</span></div>
           <div id="inpsl" ><img id="meme" src={share} /><span id="rose" >Share</span></div>
            </div>
          </div>

          <div id="main5g" >


          <div id="hi" >
          <Rewow/>
            </div>
      
     

         

{/*___________________________________________ Dashboard _______________________________________________*/}    

            <div id="jrs" >      
            <center >


              <div id="gpt" style={_dash(1)}  >
            <div id="dntex" >Your Tasks</div>

            <div id="lwiget" >
            <div id="wiheading" >Current jobs to do</div>
            <img alt="img" id="wicon" src={graph}  />
            <div id="wibtex" >see your current workloads for the next 28days</div>
            <div id="vmt" >view more......</div>
            <div id="wmicon" >
            <img alt="img" id="wichil" src={favorite}  />
            <img alt="img" id="wichil" src={branch}  />
            <img alt="img" id="wichil" src={expand}  />
            
            </div>
            </div>

            <div id="lwiget" >
            <div id="wiheading" >Completed jobs 0</div>
            <img alt="img" id="wicon" src={graph}  />
            <div id="wibtex" >Number of jobs completed in total</div>
            <div id="vmt" >view more......</div>
            <div id="wmicon" >
            <img alt="img" id="wichil" src={favorite}  />
            <img alt="img" id="wichil" src={branch}  />
            <img alt="img" id="wichil" src={expand}  />
            
            </div>
            </div>

            <div id="lwiget" >
            <div id="wiheading" >Submitted jobs 12</div>
            <img alt="img" id="wicon" src={graph}  />
            <div id="wibtex" >Your submited jobs history and current payroll</div>
            <div id="vmt" >view more......</div>
            <div id="wmicon" >
            <img alt="img" id="wichil" src={favorite}  />
            <img alt="img" id="wichil" src={branch}  />
            <img alt="img" id="wichil" src={expand}  />
            
            </div>
            </div>

            <div id="lwiget" >
            <div id="wiheading" > Leave Requested 0</div>
            <img alt="img" id="wicon" src={graph}  />
            <div id="wibtex" >Your submitted leave history</div>
            <div id="vmt" >view more......</div>
            <div id="wmicon" >
            <img alt="img" id="wichil" src={favorite}  />
            <img alt="img" id="wichil" src={branch}  />
            <img alt="img" id="wichil" src={expand}  />
            
            
            </div>
            </div>
            

            <div id="lwiget" >
            <div id="wiheading" > clients 1</div>
            <img alt="img" id="wicon" src={graph}  />
            <div id="wibtex" >Your clients history... </div>
            <div id="vmt" >view more......</div>
            <div id="wmicon" >
            <img alt="img" id="wichil" src={favorite}  />
            <img alt="img" id="wichil" src={branch}  />
            <img alt="img" id="wichil" src={expand}  />
            
            
            </div>
            </div>

            

            <div id="lwiget" >
            <div id="wiheading" > incedent report</div>
            <img alt="img" id="wicon" src={graph}  />
            <div id="wibtex" >incedent report history...</div>
            <div id="vmt" >view more......</div>
            <div id="wmicon" >
            <img alt="img" id="wichil" src={favorite}  />
            <img alt="img" id="wichil" src={branch}  />
            <img alt="img" id="wichil" src={expand}  />
            
            
            </div>
            </div>


            <div id="padbase" ></div>
            </div>
            
            </center>
          </div>
            
            <div id="hi2" >
          <Rewow/>
            </div>

{/*___________________________________________  Clients _______________________________________________*/}

<div id="jrs1" >      
            <center >

<div id="gpt1" style={_dash(2)} >
            <div id="dntex" >Clients</div>


<div id="lwigetc" >
            <div id="wiheading" >Clients Name</div>
            <div id="medr" >Medical record</div>
            <img alt="img" id="wicon" src={user}  />
            
            <div id="wijic" >
              <div id="gc1" ><span id="flm" >Diabeties</span> <span id="fr" >12/4/2023</span>  </div>
              <div id="flmp" ><div id="line" ></div></div>
              
              <div id="GH1" >Drugs administerd</div>
              <div id="gc1" >kotlin 2x3 daily <span id="fr" >12/4/2023</span>  </div>
              <div id="line2" ></div>
              
              <div id="GH1" >Health report</div>
              <div id="gc1" >contractile 2x3 daily <span id="fr" >12/4/2023</span>  </div>

            <div id="vmt2" onClick={e=> setdash(2.1) } >view more......</div>
              <div id="pad" ></div>
              </div>
            
            </div>

            <div id="lwigetc" >
            <div id="wiheading" >Clients Name</div>
            <div id="medr" >Medical record</div>
            <img alt="img" id="wicon" src={user}  />
            
            <div id="wijic" >
              <div id="gc1" ><span id="flm" >Diabeties</span> <span id="fr" >12/4/2023</span>  </div>
              <div id="flmp" ><div id="line" ></div></div>
              
              <div id="GH1" >Drugs administerd</div>
              <div id="gc1" >kotlin 2x3 daily <span id="fr" >12/4/2023</span>  </div>
              <div id="line2" ></div>
              
              <div id="GH1" >Health report</div>
              <div id="gc1" >contractile 2x3 daily <span id="fr" >12/4/2023</span>  </div>

            <div id="vmt2" >view more......</div>
              <div id="pad" ></div>
              </div>
            
            </div>

            <div id="lwigetc" >
            <div id="wiheading" >Clients Name</div>
            <div id="medr" >Medical record</div>
            <img alt="img" id="wicon" src={user}  />
            
            <div id="wijic" >
              <div id="gc1" ><span id="flm" >Diabeties</span> <span id="fr" >12/4/2023</span>  </div>
              <div id="flmp" ><div id="line" ></div></div>
              
              <div id="GH1" >Drugs administerd</div>
              <div id="gc1" >kotlin 2x3 daily <span id="fr" >12/4/2023</span>  </div>
              <div id="line2" ></div>
              
              <div id="GH1" >Health report</div>
              <div id="gc1" >contractile 2x3 daily <span id="fr" >12/4/2023</span>  </div>

            <div id="vmt2" >view more......</div>
              <div id="pad" ></div>
              </div>
            
            </div>

            <div id="lwigetc" >
            <div id="wiheading" >Clients Name</div>
            <div id="medr" >Medical record</div>
            <img alt="img" id="wicon" src={user}  />
            
            <div id="wijic" >
              <div id="gc1" ><span id="flm" >Diabeties</span> <span id="fr" >12/4/2023</span>  </div>
              <div id="flmp" ><div id="line" ></div></div>
              
              <div id="GH1" >Drugs administerd</div>
              <div id="gc1" >kotlin 2x3 daily <span id="fr" >12/4/2023</span>  </div>
              <div id="line2" ></div>
              
              <div id="GH1" >Health report</div>
              <div id="gc1" >contractile 2x3 daily <span id="fr" >12/4/2023</span>  </div>

            <div id="vmt2" >view more......</div>
              <div id="pad" ></div>
              </div>
            
            </div>

            <div id="lwigetc" >
            <div id="wiheading" >Clients Name</div>
            <div id="medr" >Medical record</div>
            <img alt="img" id="wicon" src={user}  />
            
            <div id="wijic" >
              <div id="gc1" ><span id="flm" >Diabeties</span> <span id="fr" >12/4/2023</span>  </div>
              <div id="flmp" ><div id="line" ></div></div>
              
              <div id="GH1" >Drugs administerd</div>
              <div id="gc1" >kotlin 2x3 daily <span id="fr" >12/4/2023</span>  </div>
              <div id="line2" ></div>
              
              <div id="GH1" >Health report</div>
              <div id="gc1" >contractile 2x3 daily <span id="fr" >12/4/2023</span>  </div>

            <div id="vmt2" >view more......</div>
              <div id="pad" ></div>
              </div>
            
            </div>

            <div id="lwigetc" >
            <div id="wiheading" >Clients Name</div>
            <div id="medr" >Medical record</div>
            <img alt="img" id="wicon" src={user}  />
            
            <div id="wijic" >
              <div id="gc1" ><span id="flm" >Diabeties</span> <span id="fr" >12/4/2023</span>  </div>
              <div id="flmp" ><div id="line" ></div></div>
              
              <div id="GH1" >Drugs administerd</div>
              <div id="gc1" >kotlin 2x3 daily <span id="fr" >12/4/2023</span>  </div>
              <div id="line2" ></div>
              
              <div id="GH1" >Health report</div>
              <div id="gc1" >contractile 2x3 daily <span id="fr" >12/4/2023</span>  </div>

            <div id="vmt2" >view more......</div>
              <div id="pad" ></div>
              </div>
            
            </div>


            <div id="padbase" ></div>
            </div>




            </center>
          </div>
          

<div id="gpt1" style={_dash(2.1)} >

  
<div id="hi" >
  
          <Rewow2/>
            </div>

            

            <div id="dntex" >Clients</div>

              <div id="babyskin"  >
                
                <div id="hi2" >
                  
      
            <Welltest/>

                </div>
                

                <div id="trig" >Triggers</div>
                
             {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>_*/}
                <div id="Danger" >
                  
                  <div id="dan" > Extreme  </div>
                <div id="dalen" ></div>
                <div id="trig" >
                  <div id="dan" >Diabeties</div>

                 <div id="dane" >cholera no awareness to stranger dangercholera no awareness to stranger 
                 dangercholera no awareness to stranger dangercholera no awareness to stranger dangercholera 
                 no awareness to stranger dangercholera no awareness to stranger danger </div> 
                 </div>
                 
                </div>

                  
                <div id="Danger" >
                 <div id="dan" > Moderate  </div>
                  <div id="dalen1" ></div>
                  <div id="trig" >
                    <div id="dan" >Diabeties</div>

                   <div id="dane" >cholera no awareness to stranger dangercholera no awareness to stranger 
                   dangercholera no awareness to stranger dangercholera no awareness to stranger dangercholera 
                   no awareness to stranger dangercholera no awareness to stranger danger </div> 
                   </div></div>

                  
                <div id="Danger" >
                    <div id="dan" > Mild  </div>
                  <div id="dalen2" ></div>
                  <div id="trig" >
                    <div id="dan" >Diabeties</div>

                   <div id="dane" >cholera no awareness to stranger dangercholera no awareness to stranger 
                   dangercholera no awareness to stranger dangercholera no awareness to stranger dangercholera 
                   no awareness to stranger dangercholera no awareness to stranger danger </div> 
                   </div></div>
                
                
                    <div id="trig" >progress notes</div>
                   <div id="prognote" >

            <textarea placeholder="" id="wig" />
            <div id="key" > Submit </div>
            </div>



                
             {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>_*/}
              </div>

            </div>
{/*___________________________________________  Messages _______________________________________________*/}



  <div id="gpt1" style={_dash(3)} >
            <div id="dntex" >Messages</div>
            <center >

              <div id="messagecase" >
              <div id="mhead" >Admin</div>
              <div id="del" onClick={e=> setpop(1)} ><img alt="img" id="img" src={del}/> </div>
              
              <div id="incase" >
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                <div id="messages"><div id="mbody">you are to give bornaventure 12 dosage of kotlin today</div> <div id="mtime" >delivered 12pm</div> </div>
                </div>
              </div>

            </center>
            </div>

{/*___________________________________________ History _______________________________________________*/}



<div id="gpt1" style={_dash(4)} >
            <div id="dntex" >History</div>
            <center >

              <div id="messagecase" >

                <div id="hish" >
                  <div id="hiop" > All </div>     <div id="di" ></div>
                  <div id="hio" > weekly </div>  <div id="di" ></div>
                  <div id="hio" > Monthly </div> <div id="di" ></div>
                  <div id="hio" > Yearly </div>
                </div>

              <div id="incase" >
                <div id="anybg"><div> reports </div> <div> <img alt="img"  src={max}  id="max" /> </div> </div>
                <div id="anybg"><div> progress </div> <div> <img alt="img"  src={max}  id="max" /> </div> </div>
                <div id="anybg"><div> shifts </div> <div> <img alt="img"  src={max}  id="max" /> </div> </div>
                <div id="anybg"><div> payrolls </div> <div> <img alt="img"  src={max}  id="max" /> </div> </div>

            <div  id="cnn" >Completed Tasks</div>

            <div id="incase2" >
                <div id="messages"><div id="mbody">completed administration to mary mohamed </div> <div id="mtime" > 12pm</div> </div>
                <div id="messages"><div id="mbody">completed administration to mary mohamed </div> <div id="mtime" > 12pm</div> </div>
                <div id="messages"><div id="mbody">completed administration to mary mohamed </div> <div id="mtime" > 12pm</div> </div>
                <div id="messages"><div id="mbody">completed administration to mary mohamed </div> <div id="mtime" > 12pm</div> </div>
                <div id="messages"><div id="mbody">completed administration to mary mohamed </div> <div id="mtime" > 12pm</div> </div>
                <div id="messages"><div id="mbody">completed administration to mary mohamed </div> <div id="mtime" > 12pm</div> </div>
              </div>

              </div>

              </div>
            </center>
            </div>


{/*___________________________________________ Progress  _______________________________________________*/}        
           
           

<div id="gpt1" style={_dash(5)} >
            <div id="dntex" >Daily progress</div>

            
            <center >

              <div id="messagecase2" >
    <div id="wiheading" >Today</div>

    <div  ></div>

    
    <div id="incase3" >
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
                <div id="messagesx"><div id="mbody">completed administration to mary mohamed </div> <div id="btx" > Complete Task</div> </div>
              </div>
            <div id="line" ></div>
            <div id="ichtime" >Last 24 hrs</div>
            <div id="incase3" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >From To </div></div>
                <div id="allcol" ><div id="tah" >progress  </div></div>
                <div id="allcol1" ><div id="tah" >Date </div></div>
                <div id="allcol2" ><div id="tah" >Client </div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >8.00am 1.00pm</div></div>
                <div id="allcol" ><div id="tab" >panadol 2*3</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx1" > Completed Task</div></div></div>
                <div id="allcol2" ><div id="tab2" >BornaventureBornaventure</div></div>
              </div>

              
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >8.00am 1.00pm</div></div>
                <div id="allcol" ><div id="tab" >panadol 2*3panadol 2*3panadol 2*3</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx2" > Pending Task</div></div></div>
                <div id="allcol2" ><div id="tab2" >BornaventureBornaventure</div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" >8.00am 1.00pm</div></div>
                <div id="allcol" ><div id="tab" >panadol 2*3</div></div>
                <div id="allcol1" ><div id="tab" ><div id="btx3" > Failed Task</div></div></div>
                <div id="allcol2" ><div id="tab2" >BornaventureBornaventure</div></div>
              </div>

                </div>

              </div>
            </center>
            </div>

{/*___________________________________________ Payroll _______________________________________________*/}


<div id="gpt1" style={_dash(6)} >
            <div id="dntex" >Payroll</div>

            
            <center >

              <div id="messagecase2" >

                <div id="yowant" >

                  <div id="sunburn" >
                    <div id="xptm" >payment</div>
                    <div id="xptm2" >worthy ag payroll and history</div>
                    <div id="xptm3" >$20 hourly</div>
                  </div>

                  <div id="sunburn" >
                    <div id="xptm" >BSB</div>
                    <div id="xptm2" >2000220020</div>
                  </div>

                </div>

                <div id="line" ></div>
                <div id="manbtt" >Manage</div>

              <div id="payhis" >Payment history (4)</div>
              <div id="payhimininote" >See history of your payment plan invoice</div>

              <div id="pinc" >
                <div id="line" ></div>
                
            <div id="incase3" >
              <div id="tarow" >
                <div id="allcol" ><div id="tah" >Payment invoice <img src={max} alt="img"  id="mine"/></div></div>
                <div id="allcol" ><div id="tah" >Amount <img src={max} alt="img"  id="mine"/></div></div>
                <div id="allcol1" ><div id="tah" >Date <img src={max} alt="img"  id="mine"/></div></div>
                <div id="allcol2" ><div id="tah" >Status <img src={max} alt="img"  id="mine"/></div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" ><input type='checkbox' /> Invoice #0098-sep 2023</div></div>
                <div id="allcol" ><div id="tab" >$2000.00</div></div>
                <div id="allcol1" ><div id="tab" >june 12-14, 2023</div></div>
                <div id="allcol2" ><div id="tab2" >Success |</div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" ><input type='checkbox' /> Invoice #0098-sep 2023</div></div>
                <div id="allcol" ><div id="tab" >$2000.00</div></div>
                <div id="allcol1" ><div id="tab" >june 12-14, 2023</div></div>
                <div id="allcol2" ><div id="tab2" >Success |</div></div>
              </div>
              
              <div id="tarow" >
                <div id="allcol" ><div id="tab" ><input type='checkbox' /> Invoice #0098-sep 2023</div></div>
                <div id="allcol" ><div id="tab" >$2000.00</div></div>
                <div id="allcol1" ><div id="tab" >june 12-14, 2023</div></div>
                <div id="allcol2" ><div id="tab2" >Success |</div></div>
              </div>

              
                </div>
                
              </div>

              </div>
            </center>
            </div>

{/*___________________________________________ Settings _______________________________________________*/}


<div id="gpt1" style={_dash(7)} >
            <div id="dntex" >Settings</div>

            
            <center >

            <div id="messagecase2" >

                <div id="proplus" >My profile</div>
                <div id="proplusu" >Payroll</div>
                <div id="proplusu" >Data export</div>
                
                <div id="concase" >
                  <div id="mpn" >My profile</div>
                  <div id="spri" ><img alt='img' id='img' src={user} /> </div>

                  <div id="lipro" >
                    <div id="prosetname" >Lilian Roseville (@LilRoseville</div>
                    <div id="profsepos" >Senior staff</div>
                    <div id="profsetori" >Leeds United kingdom</div>
                  </div>

                  <div id="edibut" >Edit <img alt="img" id="img" src={edit} /> </div>

                  <div id="afproset" ><div id="line" ></div></div>
                  
                  <div id="pinfo" >Personal information</div>

                  <div id="profed" ><div id="nkeizizi" >Fist Name</div> <div id="nknonairu" >Lillian</div></div>
                  <div id="profed" ><div id="nkeizizi" >Last Name</div> <div id="nknonairu" >Roseville</div></div>
                  <div id="profed" ><div id="nkeizizi" >E-mail</div> <div id="nknonairu" >roseville@lilRoseville.com</div></div>
                  <div id="profed" ><div id="nkeizizi" >Phone</div> <div id="nknonairu" >+0022 38383</div></div>

                  <div id="edibut2" >Edit <img alt="img" id="img" src={edit} /> </div>
                  
                  <div id="afproset2" ><div id="line" ></div></div>
                  
                  <div id="pinfo" >Adrress information</div>

                  <div id="profed" ><div id="nkeizizi" >Country</div> <div id="nknonairu" >Australia</div></div>
                  <div id="profed" ><div id="nkeizizi" >city/states</div> <div id="nknonairu" >sydney</div></div>
                  <div id="profed" ><div id="nkeizizi" >postal code</div> <div id="nknonairu" >ERT 2345</div></div>
                  <div id="profed" ><div id="nkeizizi" >AS45645756</div> <div id="nknonairu" >AS45645756</div></div>


                </div>

              </div>

              

            </center>
            </div>

{/*___________________________________________ Report  _______________________________________________*/}


<div id="gpt1" style={_dash(8)} >
            <div id="dntex" >Report</div>

            
            <center >

            <div id="messagecase2" >
              
              <div id="quickpos" >
                    <div id="ochild" >Incedent report</div>
                   <div id="quchil" >

            <textarea placeholder="Something is runing around in the office" id="gogwof" />
            <div id="subins" > Submit </div>
            </div>

              </div>
            </div>

              

            </center>
            </div>

{/*___________________________________________ Files  _______________________________________________*/}



<div id="gpt1" style={_dash(9)} >
            <div id="dntex" >Messages</div>
            <center >

              <div id="messagecase" >
              <div id="mhead" >Files</div>
              <div id="del" onClick={e=> setpop(1)} ><img alt="img" id="img" src={del}/> </div>
              
              <div id="incatrans" >
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                <div id="moxfox"> <img alt="alt" id="img" src={txt} /> <div id="mbody">12 dosage of kotlin today</div> <div id="mtime" >download</div> </div>
                </div>
              </div>

            </center>
            </div>
            
{/*___________________________________________ Files End  _______________________________________________*/}


            </div>

          </div>




      </div>


    </div>
 )
 
}

export default App;
