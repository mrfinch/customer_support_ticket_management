FactoryGirl.define do

  sequence :r_user_email do |n|
    "user_#{n}@example.com"
  end

  sequence :r_user_name do |n|
    "User #{n}"
  end

  factory :r_user, class: User do
    email { generate(:r_user_email) }
    password 'password'
    name { generate(:r_user_name) }

    after(:create) do |user|
      # this is needed because devise wont allow to login without confirming
      user.confirm
    end
  end

end
