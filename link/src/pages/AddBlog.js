import Navbar from "../components/Navbar"
import axios from "axios";
const app = document.getElementById('app')

window.handleBlog = (event)=>{
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('userData'));
    let judul = event.target.judul.value;
    let img = event.target.img.value; 
    let content = event.target.content.value; 

    axios.post('http://localhost:3000/blogs', {
        userId : userData.user.id,
        author : userData.user.email,
        judul : judul,
        img : img,
        content : content,
        createdAt : new Date().toLocaleDateString()
    })
    .then(res => {
        alert('Berhasil Tambah blog')
        window.location.href = '/'
    })
    .catch(err =>{
        alert("terjadi kesalahan")
        console.error(err)
    })


}

export default function AddBlog(){

    app.innerHTML = `
        ${ Navbar() }
        <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">

            <form class="w-[500px] flex flex-col gap-4 mx-auto mt-10" onsubmit="handleBlog(event)">

                <div class="flex flex-col gap-2 font-light">
                    <label for="judul">Judul</label>
                    <input type="text" class="w-full px-3 h-10 font-light rounded-md" id="judul" />
                </div>

                <div class="flex flex-col gap-2 font-light">
                    <label for="img">Link Gambar</label>
                    <input type="text" class="w-full px-3 h-10 font-light rounded-md" id="img" />
                </div>

                <div class="flex flex-col gap-2 font-light">
                    <label for="content">Konten</label>
                    <textarea class="w-full p-3 h-[300px] font-light rounded-md" id="content" ></textarea>
                </div>

                <button type="submit" class="h-10 w-[30%] bg-orange-500 text-white rounded-md ml-auto" >
                    Submit
                </button>

            </form>


        </div>
    `

}