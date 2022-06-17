import React from 'react';
import LoctationIcon from '../assets/icon-location.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import CompanyIcon from '../assets/icon-company.svg';
import { useContext } from 'react';
import GithubContext from '../context/GithubContext';

function UserProfile({
  user: {
    avatar_url,
    name,
    created_at,
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
  const { mode } = useContext(GithubContext);
  // function formatDate(created_at) {
  //   let date = new Date();
  //   return date.toLocaleDateString('en-US');
  // }

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };
  return (
    <div
      className={`${
        mode ? 'bg-white ' : 'bg-navyDarkMode text-white'
      } rounded-lg py-10`}
    >
      <div className="grid gap-4 grid-cols-6">
        <div className="p-4 col-start-1 col-span-1">
          <img
            className="rounded-full"
            src={avatar_url}
            alt="Users profile phot"
          />
        </div>

        <div className="col-start-2 col-span-5 pr-8 space-y-2">
          <div className="flex justify-between">
            <h2
              className={`${
                mode ? 'text-fontBlack' : 'text-white'
              } text-3xl font-semibold`}
            >
              {name}
            </h2>
            <p>Joined {getFormattedDate(created_at)}</p>
          </div>
          <p className="text-xl text-primaryBlue">@{login}</p>
          <p
            className={`${
              bio === null ? 'text-grayishBlueFade' : ''
            } ${bio}  pb-4`}
          >
            {bio === null ? 'This profile has no bio' : bio}
          </p>

          <div
            className={`${
              mode ? 'bg-veryLightGrayLM' : ' bg-blackDarkM'
            } flex justify-between rounded-lg p-8 text-center`}
          >
            <div className="flex flex-col">
              <p>Repos</p>
              <p
                className={`${
                  mode ? 'text-fontBlack' : 'text-white'
                } font-bold text-2xl`}
              >
                {public_repos}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Followers</p>
              <p
                className={`${
                  mode ? 'text-fontBlack' : 'text-white'
                } font-bold text-2xl`}
              >
                {followers}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Following</p>
              <p
                className={`${
                  mode ? 'text-fontBlack' : 'text-white'
                } font-bold text-2xl`}
              >
                {following}
              </p>
            </div>
          </div>

          <div className="grid gap-4 pt-8 lg:grid-cols-2">
            <div className="flex">
              <img
                className={`${mode ? '' : 'white-icon'} mr-2`}
                src={LoctationIcon}
                alt="Location"
              />
              <p>{location}</p>
            </div>
            <div className="flex">
              <img
                className={`${mode ? '' : 'white-icon'} mr-2`}
                src={TwitterIcon}
                alt="twitter logo"
              />
              <p className="text-grayishBlueFade">
                {twitter_username === null ? 'Not Avaiable' : twitter_username}
              </p>
            </div>

            <div className="flex">
              <img
                className={`${mode ? '' : 'white-icon'} mr-2`}
                src={WebsiteIcon}
                alt="Website logo"
              />
              <a className="hover:border-b" href={html_url}>
                {html_url}
              </a>
            </div>
            <div className="flex">
              <img
                className={`${mode ? '' : 'white-icon'} mr-2`}
                src={CompanyIcon}
                alt="Company Icon"
              />
              <p>{company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
