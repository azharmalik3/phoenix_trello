defmodule PhoenixTrello.Repo.Migrations.AddPositionToCards do
  use Ecto.Migration

  def change do
    alter table(:cards) do
      add :position, :integer
    end
  end
end