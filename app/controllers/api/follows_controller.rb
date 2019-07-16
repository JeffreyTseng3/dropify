class Api::FollowsController < ApplicationController

    def create
        check = Follow.find_by(follow_params)
        

        if check 
           
        else
            @follow = Follow.new(follow_params)
            @follow.save
            render "api/follows/show"
        end 

    end 

    def index 
        @follows = Follow.all
        render 'api/follows/index'
        #search imitate
    end

    def destroy 
       
        id = params[:id]
        item = Follow.find(id)
        item.destroy!

        @follows = Follow.all
        render 'api/follows/index'

        
    end 

    def follow_params 
        params.require(:data).permit(:user_id, :followable_id, :followable_type)
    end     

end 