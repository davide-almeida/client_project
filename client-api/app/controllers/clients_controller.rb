class ClientsController < ApplicationController
  before_action :set_client, only: %i[show update destroy]

  def index
    clients = Client.order('created_at DESC')
    render json: { status: 'SUCCESS', message: 'Listando clientes', data: clients }, status: :ok
  end

  def show
    render json: { status: 'SUCCESS', message: 'Cliente encontrado', data: @client }, status: :ok
  end

  def create
    client = Client.new(client_params)
    if client.save
      render json: { status: 'SUCCESS', message: 'Saved client', data: client }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Client not saved', data: client.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @client.update(client_params)
      render json: { status: 'SUCCESS', message: 'Editado com sucesso!', data: @client }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Deu ruim no update', data: @client.errors },
             status: :unprocessable_entity
    end
  end

  def destroy
    @client.destroy
    render json: { status: 'SUCCESS', message: 'Removido com sucesso!', data: @client }, status: :ok
  end

  private

  def set_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:first_name, :last_name, :birth_date)
  end
end
