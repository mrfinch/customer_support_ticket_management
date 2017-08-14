class Ticket < ActiveRecord::Base

  VALID_TYPES = {
    bug: 0,
    feature: 1
  }

  REQUEST_SUBMITTED = 0

  belongs_to :user

end
