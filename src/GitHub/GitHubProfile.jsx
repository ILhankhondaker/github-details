import { useState } from 'react';
import SearchIcon from "../assets/search.svg"
import useGitHub from "./useGithub";

const GitHubProfile = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        // filterData(query);
    };

    // Function to handle search button click
    const handleSearchClick = () => {
        setSearchData(searchQuery);
    };


    // const { user, loading, error } = useGitHub("ILhanKhondaker");
    const { user, loading, error } = useGitHub(searchData);
    // console.log(user)

    return (
        <>

            <div className="flex  space-x-2 py-2 px-3 group  transition-all border-b border-black/50 w-96 mx-auto my-5 shadow-lg">
                {/* input field  */}
                <input
                    className="placeholder:italic placeholder:text-slate-400 text-black w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Your GitHub Name"
                    onChange={handleSearchChange}
                    required
                />
                {/* action  button  */}


                <button type="submit"

                    onClick={handleSearchClick}
                >
                    <img src={SearchIcon} alt="Search" />

                </button>
            </div>


            {user ? (
                <div className="flex flex-col justify-center items-center  p-4 bg-gray-100">
                    <img
                        src={user["avatar_url"]}
                        alt="photo"
                        className="border rounded-full w-32 h-32 shadow-lg"
                    />
                    <div className=' font-bold font-mono '>
                        <h1>Name: {user?.name}</h1>
                        <h1>ID: {user?.id}</h1>
                        <h1>Node  ID: {user?.node_id}</h1>
                        <h1>GitHub Account created Date: {user?.created_at}</h1>
                        <h1>GitHub last updatte Date: {user?.updated_at}</h1>

                        <h1>website: <a href={user?.blog} target="_blank" rel="noopener noreferrer">PortFolio</a> </h1>
                        <h1>Location: {user?.location}</h1>
                        <h1>Public Repository: {user["public_repos"]}</h1>
                        <h1>Followers: {user.followers}</h1>
                    </div>
                    <p className="my-2 text-md bg-gray-300 border p-2 rounded-md">
                        {user?.bio}
                    </p>
                    <p className="text-3xl my-3">
                        {user?.name} has <u>{user["public_repos"]}</u> public
                        repositories that gained <u>{user.followers}</u>{" "}
                        followers.
                    </p>


                </div>
            ) : (
                <p>No user data</p>
            )}
        </>
    );
};

export default GitHubProfile;
