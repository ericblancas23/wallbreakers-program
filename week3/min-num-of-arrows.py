class Solution:
    def findMinArrowShots(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        from functools import  cmp_to_key
        points.sort(key = cmp_to_key(self.compare))
        res = 0
        index = 0
        while(index < len(points)):
            left = -float("inf")
            right = float("inf")
            while(index < len(points) and (left<=points[index][0]<=right or left<= points[index][1]<=right)):
                left = max(left,points[index][0])
                right = min(right,points[index][1])
                index +=1
            res +=1
        return res

    def compare(self,array1,array2):
        if array1[0] < array2[0]:
            return -1
        elif array1[0] == array2[0]:
            return 0
        else:
            return 1
