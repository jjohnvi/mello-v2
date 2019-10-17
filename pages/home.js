import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/">
        <a>Login Page</a>
      </Link>
      <p>This is the Home page</p>
    </div>
  );
};

export default Home;
