import React from 'react';
import LoctationIcon from '../assets/icon-location.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import CompanyIcon from '../assets/icon-company.svg';

function UserProfile({
  user: {
    avatar_url,
    name,
    login,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    html_url,
    company,
  },
}) {
  return (
    <div className="bg-white rounded-lg py-10">
      <div className="grid gap-4 grid-cols-6">
        <div className="p-4 col-start-1 col-span-1">
          <img
            className="rounded-full"
            src={avatar_url}
            alt="Users profile phot"
          />
        </div>
        <div className="col-start-2 col-span-5 pr-8">
          <div className="flex justify-between">
            <h2 className="text-3xl">{name}</h2>
            <p></p>
          </div>
          <p className="text-primaryBlue">@{login}</p>
          <p>{bio === null ? 'This profile has no bio' : bio}</p>

          <div className="flex justify-between bg-veryLightGrayLM rounded-lg p-8 text-center">
            <div className="flex flex-col">
              <p>Repos</p>
              <p className="font-bold">{public_repos}</p>
            </div>
            <div className="flex flex-col">
              <p>Followers</p>
              <p className="font-bold">{followers}</p>
            </div>
            <div className="flex flex-col">
              <p>Following</p>
              <p className="font-bold">{following}</p>
            </div>
          </div>

          <div className="grid gap-4 mt-4">
            <div className="flex">
              <img className="w-4 mr-2" src={LoctationIcon} alt="Location" />
              <p>{location}</p>
            </div>
            <div className="flex">
              <img className=" mr-2" src={TwitterIcon} alt="twitter logo" />
              <p>{twitter_username}</p>
            </div>

            <div className="flex">
              <img className="w-5 mr-2" src={WebsiteIcon} alt="Website logo" />
              <a className="inline" href={html_url}>
                {html_url}
              </a>
            </div>
            <div>
              <img className="w-4 mr-2" src={CompanyIcon} alt="Company Icon" />
              <p>{company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
