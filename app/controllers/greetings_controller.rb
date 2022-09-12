class GreetingsController < ApplicationController
  def index
    render json: Greeting.greet
  end
end
