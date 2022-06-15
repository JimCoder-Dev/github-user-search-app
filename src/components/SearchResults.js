function SearchResults() {
  return (
    <div className="bg-white rounded-lg pb-12 ml-20">
      <div className="grid grid-cols-6">
        <div className="col-start-1 col-span-2"></div>
        <div className="col-start-3 col-span-3">
          <div className="flex justify-between">
            <h2 className="text-3xl">The Octocat</h2>
            <p>Joined 25 Jan 2011</p>
          </div>
          <p className="text-primaryBlue">@Octocat</p>
          <p>This profile has no bio</p>

          <div className="flex justify-between bg-veryLightGrayLM rounded-lg p-8">
            <div className="flex flex-col">
              <p>Repos</p>
              <p className="font-bold">8</p>
            </div>
            <div className="flex flex-col">
              <p>Followers</p>
              <p className="font-bold">3938</p>
            </div>
            <div className="flex flex-col">
              <p>Following</p>
              <p className="font-bold">9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
