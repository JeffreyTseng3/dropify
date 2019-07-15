class Api::FollowsController < ApplicationController

    def create
        check = Follow.find_by(follow_params)
        

        if check 
           
        else
            @follow = Follow.new(follow_params)
            @follow.save
        end 

    end 

    def index 
        @follows = Follow.all
        render 'api/follows/index'
        #search imitate
    end

    def destroy 

    end 

    def follow_params 
        params.require(:data).permit(:user_id, :followable_id, :followable_type)
    end     

end 