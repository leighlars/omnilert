# Omnilert Gif Search Engine Challenge

### [Leigh Larson](https://github.com/leighlars?tab=repositories)

### Set up 
- Fork or clone repository into your local computer.  Since you don't want your project to be named "omnilert", add an optional argument after the repo url when cloning. The command should look like this: 
`git clone [remote-address] [what you want to name the repo]`.
- Once you have cloned the repo, change (`cd `) into the directory and run `npm install` to install project dependencies.
- Open your code into your text editor to view code. 
- Run `npm start` to launch and interact with site on `http://localhost:3000/`. 


### Reflections
If had more time, 
- I would have made slideshow with scroll buttons to view gifs individually, with static preview thumbnails below.
- Used Redux in larger app, but used Hooks for scale. Could have also used Context. 
- I would have styled each gif to be a tad bigger. Image info can be found in the `Images` object in returned data, but took some syntax finangling and kept getting errors. After 15 minutes, I didn't want to lose time.
- For the sake of loading, I initially had limit the response to 10 results from the api call, but decided to allow 20 results to be returned. If I had more time, I would fetch all results, then load / render the first 20, then on button click 'More', another set of 20 would render and so forth. This would cut down on initial loading time. 
- I spent way more time on styling than I wanted to. Kinda couldn't help it. 
- At one point, I had all loading, error, and query result messages in a single component called `DataMsgs` to clean up `Results` file. It cluttered the file tree so I removed it and threw in the conditional render statements back into Results. I'm still going back and forth on it though. I don't like logic in the return statement. 
- I would have moved the api key to a dotenv file.
