import Directory from "../../components/directory/directory.component.jsx";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      img: "https://images.pexels.com/photos/5698909/pexels-photo-5698909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Jackets",
      img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SmFja2V0cyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      title: "Sneakers",
      img: "https://images.pexels.com/photos/3434962/pexels-photo-3434962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Women",
      img: "https://media.istockphoto.com/id/1357329192/photo/lifestyle-portrait-of-fashionable-woman-wearing-winter-or-spring-outfit-felt-hat-gray-wool.jpg?b=1&s=612x612&w=0&k=20&c=6oAdmT-5gCXgtwBfhRA7k4aFLRmODDI-60PhAC5OPTg="
    },
    {
      id: 5,
      title: "Mens",
      img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]


  return (
    <Directory categories={categories} />
  );
}

export default Home;
