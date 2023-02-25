task_suffix=$1
new_branch_name=task"$task_suffix"•$(date +"%Y-%m-%d•hour%H")
git checkout task"$task_suffix" && \
git checkout -b $new_branch_name && \
less README.txt
