class UsersController < ApplicationController
  respond_to :json

  def index
    sleep 4
    @users = User.all
  end

end
