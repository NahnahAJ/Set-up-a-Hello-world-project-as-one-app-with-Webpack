class Greeting < ApplicationRecord
  validates :greeting, presence: true, uniqueness: true
end