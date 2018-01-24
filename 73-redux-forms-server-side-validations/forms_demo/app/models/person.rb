class Person < ApplicationRecord
  validates :first_name, uniqueness: true
end
