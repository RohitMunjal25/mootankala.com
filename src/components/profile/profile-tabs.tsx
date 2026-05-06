'use client'

import { MessageSquare } from 'lucide-react'

interface ProfileTabsProps {
  reviewsContent?: React.ReactNode
}

export function ProfileTabs({ reviewsContent }: ProfileTabsProps) {
  return (
    <div>
      {/* Reviews Header */}
      <div className="flex border-b border-border">
        <div className="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 border-slate-900 text-slate-900">
          <MessageSquare className="h-4 w-4" />
          Reviews
        </div>
      </div>

      {/* Reviews Content */}
      <div className="pt-6">
        {reviewsContent || (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-foreground">No reviews written</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              This user hasn&apos;t written any reviews yet. Once they do, you&apos;ll be able to see all of their reviews here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
