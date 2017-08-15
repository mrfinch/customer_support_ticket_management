Customer Support Ticket Management

- Install ruby 2.1.5 , you can use rvm or rbenv to configure multiple versions of ruby
- Install mysql

- Clone the project

- cd project

- bundle install

- rake db:create

- rake db:migrate

- Using a browser, go to http://localhost:3000

- To run specs, use:
  - RAILS_ENV=test rake db:migrate (only for first time till further migrations are added)
  - RAILS_ENV=test rspec
