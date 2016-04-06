defmodule PhoenixTrello.Repo.Migrations.AddPositionToLists do
  use Ecto.Migration

  def change do
    alter table(:lists) do
      add :position, :integer
    end
  end
end