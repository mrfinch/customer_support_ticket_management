class Ticket < ActiveRecord::Base

  BUG_TYPE = 0
  FEATURE_TYPE = 1
  VALID_TYPES = [BUG_TYPE, FEATURE_TYPE]
  TYPE_MAPPING = {
    '0' => 'Bug',
    '1' => 'Feature'
  }

  REQUEST_SUBMITTED = 0
  REQUEST_ACCEPTED = 1
  REQUEST_DECLINED = 2
  REQUEST_RESOLVED = 3

  PENDING = [REQUEST_SUBMITTED]
  RESOLVED = [REQUEST_ACCEPTED, REQUEST_DECLINED, REQUEST_RESOLVED]

  belongs_to :user

  def self.readable_types data
    data.map do |d|
      d = d.as_json
      d[:type] = TYPE_MAPPING[d['ticket_type'].to_s]
      d
    end
  end

end
