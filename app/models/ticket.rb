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

  PENDING = [REQUEST_SUBMITTED, REQUEST_ACCEPTED]
  RESOLVED = [REQUEST_DECLINED, REQUEST_RESOLVED]

  belongs_to :user
  has_many :ticket_statuses, foreign_key: :ticket_id

  scope :within_date_range, ->(start_time, end_time) { where(updated_at: (start_time..end_time)) }
  scope :valid, -> { where('user_id > ?', 0) }
  scope :pending, -> { where(current_status: PENDING).valid }
  scope :resolved, -> { where(current_status: RESOLVED).valid }

  def self.readable_types data
    data.map do |d|
      d = d.as_json
      d[:type] = TYPE_MAPPING[d['ticket_type'].to_s]
      d
    end
  end

  def add_to_status_list(status: , user:)
    new_status = TicketStatus.new(ticket_id: self.id, status: status)
    new_status.user = user
    new_status.save
  end

end
