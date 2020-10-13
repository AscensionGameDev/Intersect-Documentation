# Merging
At this point you should have created a branch, made some code modifications, committed those changes, tested that they work (hopefully), and are now ready to bring those changes back into one of your main branches (ie Master or Development).

We call this process merging, and it is very simple, you can do it via the Github Desktop app or via the Github Pull Request interface online. I will show both methods below.

## Merging with Github Desktop
Before you try to merge it is important to make sure you switch to branch to the branch you are wanting to merge into. (Not the branch you have been working on!) Select that branch in the Github Desktop app.

![selectbase](https://www.ascensiongamedev.com/resources/filehost/193129a8fb4dd77d1eec2c29b2583df3.png)

Next, click on Branch at the top and then Merge into Current Branch

![startmerge](https://www.ascensiongamedev.com/resources/filehost/d22e9b7cbf41e3073217ad58a6597002.png)

Select the branch that you've been working off of that you want to merge from. Then hit the merge button.

![selectbranch](https://www.ascensiongamedev.com/resources/filehost/cbb1f1c35f427e1025d4036032203f27.png)

GitHub Desktop will show that the merge was successful.

![successfulmerge](https://www.ascensiongamedev.com/resources/filehost/55464e25d7bc626f09db13a49229474b.png)

Finally push your branch with the merged changes to Github.

![push](https://www.ascensiongamedev.com/resources/filehost/d068a4be230a1b9dd5160cdec27854dd.png)

## Merging with Github Online
Alternatively you can use the Github online pull request interface to handle merging of branches. If you have branch protection setup, or if you want merges into your primary branches to require reviews then the above method using the desktop app won't work. Furthermore, the pull request interface is what you use in order to bring official updates into your private repo and submit code you've written to contribute to the official repo should you ever chose to do so. Creating pull requests are super easy. 

Start by going to Github.com and browsing to your personal Intersect repo. Click on the Pull Requests tab and then the New Pull Request button.

![repo](https://www.ascensiongamedev.com/resources/filehost/c2325ab7d146e6c14c8ee0b8fd55126e.png)

We are merging code within our own repos right now so now make sure the base repository and head repository dropdowns point to your repo.

![selectbase](https://www.ascensiongamedev.com/resources/filehost/233438cb778047f05be3123090091b91.png)

See the arrow? That means the selection on the right will be merged into the selection on the left. We want to merge the branch we were working on back into the original branch we started with. I am merging my cleaning-up branch back into development.

![selectbranches](https://www.ascensiongamedev.com/resources/filehost/bd156fb7af53cdaf8d85815adc61a3d7.png)

Once the repos and branches are selected Github should tell you that you are able to merge and you can create the pull request.

![createpr](https://www.ascensiongamedev.com/resources/filehost/ec2f2f1b96426a6cf319204c69d0d11f.png)

Github will take you to one final screen where you can provide a title and description for your pull request. Once ready you can hit the Create Pull Request button one last time.

![submitpr](https://www.ascensiongamedev.com/resources/filehost/aad119f6989a96665daabbd920183621.png)

With the pull request opened you can finally click the Merge pull request button to merge your code.

![merge](https://www.ascensiongamedev.com/resources/filehost/906da6cf3ccd473900c5b30c6768266f.png)

Once the merge is complete you can finally return to the Github Desktop app, select your base branch, and pull the changes from Github. (You might have to fetch first!)

![pull](https://www.ascensiongamedev.com/resources/filehost/cfb1dc1b3d9c6cb5aef42d20eff0a3ed.png)