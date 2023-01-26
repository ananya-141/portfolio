import { isContentEditable } from "@testing-library/user-event/dist/utils";
import NavBar from "./NavBar";
import image from "./newphoto.png"
import india from "./india.png";
import cap from "./graduation-hat.png";
import book from "./book.png";
import study from "./studying.png";
import software from "./software.jpeg";
import process from "./process.png";
import e from "./e-learning.png";
import coding from "./coding.png";
const App = () => {
  //this will contain the logic
  return (
    <div>
      <NavBar />
      <div className="h-48 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 "></div>
      
      <div className="items-center flex  justify-between " >
        <div className="flex items-center -my-9 mx-36">
          <img src={image} className="h-36 w-36 border-4 rounded-full shadow-sm border-white "  />
          <div>
            <h1 className="font-sans text-3xl font-semibold mx-5">Ananya Sinha</h1>
            <p className=" text-gray-500 font-medium pl-4" >
             I am a student at NIT Rourkela based in Delhi, India.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button class="bg-transparent border border-gray-200 hover:bg-purple-100 text-gray-600 font-bold py-2 px-4 rounded mr-5">
            <a href="https://drive.google.com/file/d/13OmyphSj7lUvuDCD5TPKYYBuxyieSz-_/view?usp=sharing">View Portfolio</a>
          </button>
          <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-24">
            <a href="https://www.linkedin.com/in/ananya-sinha-1a8546232/">+Follow</a>
          </button>
        </div>
        
        
      </div>  
     
      <hr className="my-12 mx-24"></hr>
      <section id="about_me"className="flex items-left">
        <h1 className="font-bold w-36 mx-24">About me</h1>
        <p className="w-9/12 mx-12 text-gray-500">I am a student of electronics and communication engineering at NIT rourkela. I am from New Delhi. I specialize in web development,
          coding. I am always striving to learn and grow more as a person and I don't take myself too seriously.
        
        </p>
      </section>
      <br></br>
      <p className="mx-96 w-9/12 text-gray-500">I am passionate of adventuring and exploring more in the field of software</p>
      <br></br>
      <p className="text-purple-500 mx-96 ">Read more</p>
      <br>
      </br>
      <div className="h-24 w-3/5 py-4 bg-blue-50 mx-96 flex justify-between px-10 font-bold">
        <div>
          <h1 className="text-purple-400 pb-3">Location</h1>
          <div className="flex ">
            <img src={india} className="h-5 w-5" />
            <p className="text-purple-600">New Delhi,India</p>
          </div>
          
        </div>
        <div>
          <h1 className="text-purple-400 pb-3">LinkedIn</h1>
        
          <a href="https://www.linkedin.com/in/ananya-sinha-1a8546232/" className="text-purple-600">ananya sinha↗</a>
        </div>
        <div>
          <h1 className="text-purple-400 pb-3">Portfolio</h1>
          <a href="https://drive.google.com/file/d/13OmyphSj7lUvuDCD5TPKYYBuxyieSz-_/view?usp=sharing" className="text-purple-600">ananyasinha↗</a>
        </div>
        <div>
          <h1 className="text-purple-400 pb-3">Email</h1>
          <a href="mailto:ananya140303@gmail.com" className="text-purple-600">ananya140303@gmail.com↗</a>
        </div>
      </div> 
      <hr className="my-9 mx-24"></hr>
      <section id="education" className="flex justify-between">
        <h1 className="font-bold mx-24">Education
        </h1>
        
          <div className="border rounded w-72 h-36 content-center pt-2 pl-10">
            <div className="flex items-center"><img className="w-9 h-9" src={book}/>
            <h1 className="font-bold text-purple-400 pl-2 underline">MATRICULATION</h1></div>
            <br></br>
            <p className="text-gray-500">Delhi Public School,Faridabad</p>
            <p className="text-gray-500">Percentage-98%</p>
            
          </div>
          <div className="border rounded pt-2 pl-10 w-72 h-36 ">
            <div className="flex items-center"><img className="w-9 h-9" src={study}/>
            <h1 className="font-bold text-purple-400 pl-2 underline ">INTERMEDIATE</h1></div>
            
            <br></br>
            <p className="text-gray-500">Delhi Public School,Faridabad</p>
            <p className="text-gray-500">Percentage-96.6%</p>
          </div>
          <div className="border rounded mr-9 px-5 pt-2 w-96 h-36">
            <div className="flex items-center mx-24"><img className="w-9 h-9 pr-2" src={cap}/>
            <h1 className="font-bold text-purple-400  underline">BTECH,ECE</h1></div>
            <br></br>
            <p className="text-gray-500">National Institute of Technology, Rourkela</p>
            <p className="text-gray-500">CGPA-8.38</p>
          </div>
        </section> 
      <hr className="my-9 mx-24"></hr>


      <div className="flex justify-between">
        <section id="skills"><h1 className="font-bold mx-24">Skills</h1></section>
        
        <div>
          <div className="border rounded-xl w-96 px-14 py-4 mb-10">
            <div className="flex items-center"><img  className="h-9 w-9" src={coding}/>
              <h1 className=" pl-2 text-purple-500 font-bold ">PROGRAMMING</h1>
            </div>
            <p className="text-gray-500">Python,C++,Javascript</p>
          </div>
          <div className="border rounded-xl w-96 py-4 px-10">
            <div className="flex items-center"><img className="h-9 w-9" src={software}/>
              <h1 className=" pl-2 text-purple-500 font-bold ">OPERATING SYSTEM</h1>
              
            </div>
            <p className="text-gray-500">Windows</p>
          </div>
        </div>
        <div className="mx-36 ">
          <div className="border rounded-xl w-96 px-10 py-4 mb-10">
            <div className="flex items-center"><img className="h-9 w-9" src={process}/>
              <h1 className="pl-2 text-purple-500 font-bold ">SOFTWARE</h1>
            </div>
            <p className="text-gray-500">Matlab, MySQL, Multisim, Autocad</p>
          </div>
          <div className="border w-96 py-4 px-7 rounded-xl">
            <div className="flex items-center"><img className="h-9 w-9" src={e}/>
              <h1 className="pl-2 text-purple-500 font-bold ">RELEVENT COURSES</h1>
              
            </div>
            < p className="text-gray-500">Data Structures,Algorithm,Web Development, MySQL</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-100 to-teal-100 ">

        </div>



      </div>
      <br></br>
        <br></br>
        <br></br> 
      


      

    </div>
  );
};

export default App;

//data should be stored somewhere
//function to add data in the storage
//data should be displayed in list