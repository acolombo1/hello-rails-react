class Greeting < ApplicationRecord
  validates :greeting, presence: true

  def self.greet
    Greeting.all.sample(1)
  end
end
