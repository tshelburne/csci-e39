# git Basics

There are a few basic workflows you should be able to follow in order to work in this
code repository for this class. For a more in-depth (and well-written!) explanation
of the things below, I would recommend http://rogerdudler.github.io/git-guide/.

## Updating local code from origin:

The upstream remote repository at tshelburne/csci-e39 will be regularly updated with
bug fixes, improvements, features, etc. as time progresses. When those updates are
made, you want to make sure you have the changes on your machine so that you are
always working from the latest codebase.

### Process:
1. `git remote -v` will show you a list of all remote repositories
1. Ensure you see the following in the list:
    origin	git@github.com:tshelburne/csci-e39.git (fetch)
    origin	git@github.com:tshelburne/csci-e39.git (push)
  - if not, run `git remote add origin git@github.com:tshelburne/csci-e39.git`
1. `git pull origin master` will pull the latest changes from `master`


## Updating code:

In git, everything change you make is represented as a "delta", or a set of differences
between the latest committed code and whatever changes you've made. When you are ready
to start making changes, you always want to work from a "branch" - this isolates your
set of changes so that you can be working on multiple updates without them blocking
the others.

1. `git checkout master` and pull the latest code as detailed above
  - `master` is the conventional name for the branch that is considered the source of
  truth for the most current state of the code
  - for the purposes of this class, you should always base a new branch for working
  off of `master`
1. `git checkout -b [new branch name]` will create a new branch with the given name,
based off of the branch you have checked out when you run the command (in this case,
`master`)
1. Make any changes needed and follow the steps below to save your changes.


## "Saving" your changes locally:

When you make updates to code on your machine, eventually you will want to officially
add those changes as part of the code history. Committing some changeset to history
is called making a "commit".

### Process:
1. `git status` will show you all of the changes that have been made since the last commit
1. `git add [space-separated directories / files]` will "stage" files for the next commit
1. `git status` will show you all the changes that will be committed
1. `git commit -m '[a useful message to describe the changeset]'` will create a new commit with the stage changes
1. `git status` will show that the staged changes are now gone, and only changes pending being staged remain


## Pushing updates to your fork:

Once you have committed code on your machine, you want to preserve those changes on
your "remote" version of the repository. In order to do that, you will push those
changes to your fork.

### Process:
1. `git remote -v`
1. Ensure you see the following in the list:
      origin	git@github.com:[your account name]/csci-e39.git (fetch)
      origin	git@github.com:[your account name]/csci-e39.git (push)
    - if not, run `git remote add fork git@github.com:[your account name]/csci-e39.git`
1. `git push fork [current branch name]` will copy the latest changes to a branch with the same name on your fork


## Merging code from your fork to upstream:

For most use-cases in this class, we won't actually be merging student code into the
upstream repository, but instead using Pull Requests for education and preparation for
working on a real software team. However, if you find a bug or want to submit an
improvement, you can always update the code and help us out!

### Process:
1. In the Github UI, click on the Pull Requests tab
1. Click "New Pull Request"
1. Click "Compare across forks"
1. Select your fork in the "Head fork: " dropdown
1. Select the branch in the "compare" dropdown
1. Click "Create Pull Request"
1. Update the Title and Description as appropriate
1. Click "Create Pull Request"