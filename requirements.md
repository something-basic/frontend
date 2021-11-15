## Vision:
#### What is the vision of this product?
To create an app that tracks the amount of unread emails I have and the progress I make on reading them. It has a visual representation of my unread emails over time.
#### What pain point does this project solve?
This helps me organize my unreads and can also filter unread emails by recipient and filter out emails that are newsletters or subscriptions.
#### Why should we care about your product?
This will help overall goal setting, productivity, and de-clutter email inboxes. Instead of looking at thousands of notifications you will be able to visually see who is sending you emails, the progress you are making and how many are just subscriptions.
## Scope (in/out):
#### In:

Will show counts of emails (read/unread) and percentage of emails that are unread.
Show unread/total by recipient.
Charts that show by day/week/month how many emails are being unread/read.
No “unsubscribe” emails so no junk or newsletter emails will show

#### Out:

Will not hold personal information, email contents, or private info. Only read/unread counts by day.
Will not be able to reply or send emails from this app. Read only.

## MVP:

Be able to login into a secure account. Once logged in, it will show data from gmail that shows unread emails and data pertaining to those emails. There are corresponding charts for the data and data will be tracked daily/weekly/monthly. 

#### Stretch: More charts. Custom filters.

## Functional Requirements:

1. User can create an account that will provide access to their gmail inbox. User can log in/out.
2. User can view and delete all data associated with their username in the database.
3. User can select bin ranges for charts (by day/week/month).

#### Data flow

Be prompted to a home page, login using Auth0 that gets information from gmail and sent back to the app. Once logged in you can access your dashboard that has information and data from gmail. In the dashboard you will be shown charts and graphs pertaining to your data. User can optionally delete their info when they are finished.

## Non-Functional Requirements: 

#### Security: <br>
Gmail API requires OAuth 2.0 to be used to access inbox data. User will authorize our app to access their inbox data. The scope needed will be https://www.googleapis.com/auth/gmail.readonly, which is considered a restricted scope. This limits the users to our app to 100 users and will display an “unverified app” warning until it is verified. Verification is not within the scope of this project as it requires a 3rd party review. Readonly scope is necessary to access email inbox counts.

#### Usability: <br>
Set up a cloud database on MongoDB where unread information will be stored. This is where the data from google will be held. Then we will use Heroku to hold our backend side of the app. We will use netlify to host and deploy our app, this is where our app will be located so you can go and login and access all the functionality of the app. 
