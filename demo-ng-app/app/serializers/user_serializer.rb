class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :contact, :city, :state, :country
end
