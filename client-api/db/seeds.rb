# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Cadastrando Clients...'
Client.create!(first_name: 'Davide', last_name: 'Almeida', birth_date: Date.today)
5.times do
  Client.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name,
                 birth_date: Faker::Date.birthday(min_age: 18, max_age: 65))
end
puts 'Clients cadastrados com sucesso!!'
