local_branches=$(git branch --list "ca-*" "us-*")
IFS=$'\n' read -d '' -r -a local_branch_array <<< "$local_branches"

# 迭代本地分支陣列，並執行 git merge 指令
for branch in "${local_branch_array[@]}"; do
  echo "$branch"
  # git checkout "$branch"
  # git merge "main-build"
done