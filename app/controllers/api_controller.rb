class ApiController < ApplicationController
  before_action :authenticate_admin!
end
