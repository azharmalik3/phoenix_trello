# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     PhoenixTrello.Repo.insert!(%PhoenixTrello.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias PhoenixTrello.Repo
alias PhoenixTrello.User

[
  %{
    first_name: "Aazhar",
    last_name: "Malik",
    email: "azhar@evercam.io",
    password: "123456"
  }
]
|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))