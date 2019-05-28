class Solution(object):
    def peakIndexInMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        n=len(A)
        left,right=0,n-1
        while left<right:
            mid=left+(right-left)//2
            if A[mid]<A[mid+1]:
                left=mid+1
            else:
                right=mid    
        return left
